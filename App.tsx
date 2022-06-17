import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { Asset } from "expo-asset";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = async () => {
    const fontToLoad = [Ionicons.font];
    const fontPromises = fontToLoad.map((font) => Font.loadAsync(font));
    await Promise.all(fontPromises);

    const imagesToLoad = [require("./assets/logo.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    await Promise.all(imagePromises);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
