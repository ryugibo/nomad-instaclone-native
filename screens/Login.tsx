import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import AuthLayout from "../components/auth/AuthLayout";
import { FormTextInput } from "../components/auth/AuthShared";
import { RootStackParamList } from "../navigators/LoggedOutNav";

const Login = ({
  navigation: { navigate },
}: NativeStackScreenProps<RootStackParamList, "Welcome">) => {
  return (
    <AuthLayout>
      <FormTextInput
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
      />
      <FormTextInput
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        lastOne={true}
      />
    </AuthLayout>
  );
};

export default Login;
