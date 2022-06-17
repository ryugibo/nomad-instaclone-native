import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { FormTextInput } from "../components/auth/AuthShared";

const Login = () => {
  const { register, handleSubmit, setValue } = useForm();
  const passwordRef = useRef<TextInput>(null);
  const onNext = (nextOne: React.RefObject<TextInput>) => {
    nextOne.current?.focus();
  };
  const onValid = (data: any) => {
    console.log(data);
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
      <AuthButton text="Log in" onPress={handleSubmit(onValid)} />
    </AuthLayout>
  );
};

export default Login;
