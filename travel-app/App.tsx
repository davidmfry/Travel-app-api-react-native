import React from "react";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from "./graphql";
import { AppNavigator } from "./src/navigation";

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors },
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state

  function toggleTheme() {
    // We will pass this function to Drawer and invoke it on theme switch press
    setIsDarkTheme((isDark) => !isDark);
  }

  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={theme as any}>
        <AppNavigator toggleTheme={toggleTheme} />
      </PaperProvider>
    </ApolloProvider>
  );
}
