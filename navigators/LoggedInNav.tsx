import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";

const Tabs = createBottomTabNavigator();

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
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
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
      />
      <Tabs.Screen
        name="Search"
        component={Search}
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
      />
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
        component={Notifications}
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
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default LoggedInNav;
