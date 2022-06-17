import AppLoading from "expo-app-loading";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { Appearance, useColorScheme } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const colorSchemeByHook = useColorScheme();
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
  console.log("hook:", colorSchemeByHook);
  const colorScheme = Appearance.getColorScheme();
  console.log(colorScheme);
  const subscription = Appearance.addChangeListener(({ colorScheme }) => {
    console.log(colorScheme);
  });
  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
}
