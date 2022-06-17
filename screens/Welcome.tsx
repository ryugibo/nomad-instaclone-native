import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigators/LoggedOutNav";

const Welcome = ({
  navigation: { navigate },
}: NativeStackScreenProps<RootStackParamList, "Welcome">) => {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => {
          navigate("CreateAccount");
        }}
      >
        <Text>Go to CreateAccount</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate("Login");
        }}
      >
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
