import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingSpinner = ({ color, size }) => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});
