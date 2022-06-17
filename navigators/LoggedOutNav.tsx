import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "../screens/CreateAccount";
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
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{
          headerTitle: () => false,
          headerTransparent: true,
          headerTintColor: "white",
        }}
        name="CreateAccount"
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
