import React, { useRef } from "react";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

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
      <TextInput
        placeholder="First Name"
        placeholderTextColor="grey"
        returnKeyType="next"
        autoFocus
        onSubmitEditing={() => onNext(lastNameRef)}
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="grey"
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor="grey"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="grey"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="grey"
        returnKeyType="done"
        secureTextEntry
        onSubmitEditing={onDone}
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <AuthButton text="Create Account" disabled />
    </AuthLayout>
  );
};

export default CreateAccount;
