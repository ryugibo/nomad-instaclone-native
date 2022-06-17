import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import Me from "../screens/Me";
import StackNavFactory from "../components/nav/StackNavFactory";

export type RootStackParamList = {
  Feed: undefined;
  Search: undefined;
  Camera: undefined;
  Notifications: undefined;
  Me: undefined;
};

const Tabs = createBottomTabNavigator<RootStackParamList>();

const LoggedInNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                iconName="home"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                iconName="search"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                iconName="camera"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                iconName="heart"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Notifications" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                iconName="person"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default LoggedInNav;
