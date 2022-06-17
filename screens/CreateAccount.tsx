import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { FormTextInput } from "../components/auth/AuthShared";

const CreateAccount = () => {
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (nextOne: React.RefObject<TextInput>) => {
    nextOne.current?.focus();
  };
  const onDone = () => {
    alert("onDone!");
  };

  return (
    <AuthLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? undefined : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
        style={{ width: "100%" }}
      >
        <FormTextInput
          placeholder="First Name"
          returnKeyType="next"
          autoFocus
          onSubmitEditing={() => onNext(lastNameRef)}
          placeholderTextColor="rgba(255, 255, 255, 0.8)"
        />
        <FormTextInput
          ref={lastNameRef}
          placeholder="Last Name"
          returnKeyType="next"
          onSubmitEditing={() => onNext(usernameRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        />
        <FormTextInput
          ref={usernameRef}
          placeholder="Username"
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        />
        <FormTextInput
          ref={emailRef}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        />
        <FormTextInput
          ref={passwordRef}
          placeholder="Password"
          returnKeyType="done"
          secureTextEntry
          onSubmitEditing={onDone}
          placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
          lastOne={true}
        />
        <AuthButton text="Create Account" disabled />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};

export default CreateAccount;
