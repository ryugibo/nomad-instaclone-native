import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";

const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 15px 10px;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

interface IAuthButton {
  onPress?: (event: GestureResponderEvent) => any | undefined;
  disabled?: boolean;
  text: String | undefined;
}
const AuthButton = ({ onPress, text, disabled = false }: IAuthButton) => {
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default AuthButton;
