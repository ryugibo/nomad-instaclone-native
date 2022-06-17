import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

interface IAuthLayout {
  children: any;
}

const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
      {children}
    </Container>
  );
};
export default AuthLayout;
