import { View } from "react-native";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";

function DifficultyIcon() {
  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <MaterialDesignIcons name="signal-cellular-1" size={22} color="#777" />
      <MaterialDesignIcons name="signal-cellular-2" size={22} color="#777" />
      <MaterialDesignIcons name="signal-cellular-3" size={22} color="#777" />
    </View>
  );
}

export default DifficultyIcon;