import { Ionicons } from "@expo/vector-icons";
import { OpaqueColorValue } from "react-native";

interface ITabIcon {
  iconName: "home" | "search" | "camera" | "heart" | "person";
  focused?: boolean;
  color?: string | OpaqueColorValue | undefined;
  size?: number;
}
const TabIcon = ({ iconName, focused, color, size = 0.0 }: ITabIcon) => {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={(focused ? 1.3 : 1.0) * size}
    />
  );
};

export default TabIcon;
