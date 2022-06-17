import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);

export const logUserIn = async (token: String) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("true")],
  ]);
  isLoggedInVar(true);
};

const client = new ApolloClient({
  uri: "https://a911-61-34-177-9.jp.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
