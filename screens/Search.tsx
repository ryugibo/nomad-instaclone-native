import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../navigators/SharedStackNav";

const Search = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Search">) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
