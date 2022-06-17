import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

const Welcome = ({
  navigation: { navigate },
}: NativeStackScreenProps<RootStackParamList, "Welcome">) => {
  const goToCreateAccount = () => navigate("CreateAccount");
  const goToLogin = () => navigate("Login");
  return (
    <AuthLayout>
      <AuthButton text="Create New Account" onPress={goToCreateAccount} />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Login</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Welcome;
