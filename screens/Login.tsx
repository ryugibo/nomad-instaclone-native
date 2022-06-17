import { gql, useMutation } from "@apollo/client";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { isLoggedInVar } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { FormTextInput } from "../components/auth/AuthShared";

const LOG_IN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(userName: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const passwordRef = useRef<TextInput>(null);
  const onCompleted = (data: any) => {
    const {
      login: { ok, token },
    } = data;
    if (!ok) {
      return;
    }
    isLoggedInVar(true);
  };
  const [logInMutation, { loading }] = useMutation(LOG_IN_MUTATION, {
    onCompleted,
  });
  const onNext = (nextOne: React.RefObject<TextInput>) => {
    nextOne.current?.focus();
  };
  const onValid = (data: any) => {
    if (loading) {
      return;
    }
    logInMutation({ variables: { ...data } });
  };
  useEffect(() => {
    register("username", { required: true });
    register("password", { required: true });
  }, [register]);
  return (
    <AuthLayout>
      <FormTextInput
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <FormTextInput
        ref={passwordRef}
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        text="Log in"
        loading={loading}
        disabled={!watch("username") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
};

export default Login;
