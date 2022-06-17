import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "../CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
