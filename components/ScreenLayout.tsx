import React from "react";
import { View, ActivityIndicator } from "react-native";

interface IScreenLayout {
  loading: boolean;
  children: React.ReactElement;
}
const ScreenLayout = ({ loading, children }: IScreenLayout) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <ActivityIndicator color="white" size="large" /> : children}
    </View>
  );
};

export default ScreenLayout;
