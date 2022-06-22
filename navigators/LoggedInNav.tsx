import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import StackNavFactory from "../components/nav/StackNavFactory";

export type RootStackParamList = {
  TabFeed: undefined;
  TabSearch: undefined;
  TabCamera: undefined;
  TabNotifications: undefined;
  TabMe: undefined;
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
        name="TabFeed"
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
        name="TabSearch"
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
        name="TabCamera"
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
        name="TabNotifications"
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
        name="TabMe"
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
