import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import session from "express-session";
import connectSqlite3 from "connect-sqlite3";
import { ApolloServer } from "apollo-server-express";
import * as path from "path";
import { buildSchema } from "type-graphql";
import { APP_SECRET } from "../utils";
import { PlaceResolver } from "./resolvers/PlaceResolver";
import { AuthResolver } from "./resolvers/AuthResolver";

const SQLiteStore = connectSqlite3(session);

async function bootstrap() {
  const app = express();

  app.use(
    session({
      store: new SQLiteStore({
        db: "database.sqlite",
        concurrentDB: true
      }),
      name: "qid",
      secret: process.env.SESSION_SECRET || APP_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365
      }
    })
  );

  const dbOptions = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );

  createConnection({ ...dbOptions, name: "default" })
    .then(async () => {
      // 1 Build Server Schema
      const schema = await buildSchema({
        // add all typescript resolvers
        // __dirname + '/resolvers/*.ts'
        resolvers: [AuthResolver, PlaceResolver],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, "schema.gql")
      });
      // 2 Create Apollo Server instance
      const apolloServer = new ApolloServer({
        schema,
        context: ({ req, res }) => ({ req, res }),
        introspection: true,
        playground: true
      });
      // 3 Apply server instance as middleware
      apolloServer.applyMiddleware({ app, cors: true });

      //4 Listen to requests on associated port
      const port = process.env.PORT || 4000;
      app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}/graphql`);
      });
    })
    .catch(error => console.log(error));
}

bootstrap();
