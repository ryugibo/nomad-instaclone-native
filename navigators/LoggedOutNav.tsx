import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "../CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "red" }}>
      <Stack.Screen
        options={{ title: "EE" }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Login"
        options={{ headerTintColor: "yellow" }}
        component={Login}
      />
      <Stack.Screen
        options={{ headerTintColor: "tomato" }}
        name="CreateAccount"
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
