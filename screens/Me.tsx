import { Text, TouchableOpacity, View } from "react-native";
import { logUserOut } from "../apollo";

const Me = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={logUserOut}>
        <Text style={{ color: "white" }}>Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Me;
