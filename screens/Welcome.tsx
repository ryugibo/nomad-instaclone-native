import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import styled from "styled-components/native";
import { colors } from "../colors";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 10px;
  border-radius: 5px;
  width: 100%;
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

const Welcome = ({
  navigation: { navigate },
}: NativeStackScreenProps<RootStackParamList, "Welcome">) => {
  const goToCreateAccount = () => navigate("CreateAccount");
  const goToLogin = () => navigate("Login");
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <CreateAccount onPress={goToCreateAccount}>
        <CreateAccountText>Create Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Login</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};

export default Welcome;
