import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Color";
import { useSelector } from "react-redux";

const QuizOptions = ({ options, handleFindCorrectAns, id }) => {
  const { solvedQuizes } = useSelector((state) => state.quiz);

  const handleDisableOptions = (optionId) => {
    const isAnswered = solvedQuizes.some((quiz) => quiz.optionId === optionId);
    return isAnswered ? true : false;
  };


  return (
    <View style={styles.outerContainer}>
      {options.map((option, index) => (
        <View style={styles.optionOuterContainer} key={option.id}>
          <Pressable
            android_ripple={{ color: "gray" }}
            onPress={handleFindCorrectAns.bind(this, id, option.id)}
            style={styles.optionInnerContainer}
            disabled={handleDisableOptions(option.id)}
          >
            <View style={styles.optionNameGroupContainer}>
              <Text style={styles.optionNameText}>
                {String.fromCharCode(65 + index)}
              </Text>
              <Text style={styles.barContainer}></Text>
              <Text style={styles.optionText}>{option.text}</Text>
            </View>
            {option.isAnswered && (
              <MaterialDesignIcons
                name={
                  option.isCorrect
                    ? "check-circle-outline"
                    : "close-circle-outline"
                }
                size={18}
                color={Colors.optionText}
              />
            )}
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default QuizOptions;

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 6,
    flexDirection: "column",
    gap: 8,
  },

  optionOuterContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    borderColor: Colors.optionBorder,
    backgroundColor: Colors.optionBackground,
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  optionNameGroupContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  optionNameText: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: Colors.iconMuted,
    color: Colors.primary,
    borderRadius: 4,
  },
  barContainer: {
    width: 1,
    height: "auto",
    borderLeftWidth: 1,
    borderColor: Colors.optionText,
  },
  optionText: {
    fontFamily: Fonts.spaceRegular,
    color: Colors.optionText,
  },
  correctAnswer: {
    backgroundColor: Colors.correctBackground,
    borderWidth: 1,
    borderColor: Colors.correctBorder,
  },
  correctText: {
    color: Colors.correctText,
  },
});
