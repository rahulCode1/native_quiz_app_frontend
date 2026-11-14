import { StyleSheet, View, Text } from "react-native";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import Colors from "../../constants/Color";

const TagContainer = ({ text, iconName, iconColor, iconSize }) => {
  return (
    <View style={styles.difficultyLevelContainer}>
      <Text style={styles.tags}>
        {/* {difficulty[0].toUpperCase() + difficulty.slice(1, difficulty.length)} */}
        {text}
      </Text>
      <MaterialDesignIcons name={iconName} size={iconSize} color={iconColor} />
    </View>
  );
};

export default TagContainer;

const styles = StyleSheet.create({
  tags: {
    fontSize: 10,
    color: Colors.difficultyText
  },
  difficultyLevelContainer: {
    flexDirection: "row",
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colors.difficultyBackground,
    color: Colors.difficultyText,
    borderRadius: 4,
  },
});
