import { gql, useMutation } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { FormTextInput } from "../components/auth/AuthShared";
import { RootStackParamList } from "../navigators/LoggedOutNav";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstname
      lastName: $lastname
      userName: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

const CreateAccount = ({
  navigation: { navigate },
}: NativeStackScreenProps<RootStackParamList, "Welcome">) => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const onCompleted = (data: any) => {
    const {
      createAccount: { ok },
    } = data;
    console.log(data);
    if (!ok) {
      return;
    }
    console.log(data);
    const { username, password } = getValues();
    navigate("Login", { username, password });
  };
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    { onCompleted }
  );
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (nextOne: React.RefObject<TextInput>) => {
    nextOne.current?.focus();
  };
  const onValid = (data: any) => {
    if (loading) {
      return;
    }
    console.log(data);
    createAccountMutation({ variables: { ...data } });
  };

  useEffect(() => {
    register("firstname", { required: true });
    register("lastname", { required: true });
    register("username", { required: true });
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);

  return (
    <AuthLayout>
      <FormTextInput
        placeholder="First Name"
        returnKeyType="next"
        autoFocus
        onSubmitEditing={() => onNext(lastNameRef)}
        placeholderTextColor="rgba(255, 255, 255, 0.8)"
        onChangeText={(text) => setValue("firstname", text)}
      />
      <FormTextInput
        ref={lastNameRef}
        placeholder="Last Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        onChangeText={(text) => setValue("lastname", text)}
      />
      <FormTextInput
        ref={usernameRef}
        placeholder="Username"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        onChangeText={(text) => setValue("username", text)}
      />
      <FormTextInput
        ref={emailRef}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        onChangeText={(text) => setValue("email", text)}
      />
      <FormTextInput
        ref={passwordRef}
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry
        onSubmitEditing={handleSubmit(onValid)}
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        onChangeText={(text) => setValue("password", text)}
        lastOne={true}
      />
      <AuthButton text="Create Account" onPress={handleSubmit(onValid)} />
    </AuthLayout>
  );
};

export default CreateAccount;
