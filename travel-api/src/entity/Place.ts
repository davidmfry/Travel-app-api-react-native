import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType({ description: "Destination or place of interest" })
@Entity()
export class Place extends BaseEntity {
  // Field - allowing GraphQl to query
  // for the following entity columns
  // PrimaryGeneratedColumn is a Primary Key
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true, description: "The place description" })
  @Column()
  description?: string;

  @Field({ nullable: true, description: "Place Image URL" })
  @Column()
  imageUrl?: string;

  @Field({ nullable: true })
  @Column()
  creationDate?: Date;

  @Field({ nullable: true })
  @ManyToOne(() => User, user => user.places)
  user?: User;
}
