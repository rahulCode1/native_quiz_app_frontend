import { View, Text, StyleSheet } from "react-native";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import { solveQuizsByUser } from "../../../features/quiz/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Color";
import TagContainer from "./TagContainer";
import QuizOptions from "../QuizOptions";

const Quiz = ({
  id,
  index,
  question,
  options,
  difficulty,
  explanation,
  subject,
  topic,
}) => {
  const dispatch = useDispatch();

  const difficultyIcons = {
    easy: "signal-cellular-1",
    medium: "signal-cellular-2",
    hard: "signal-cellular-3",
  };

  const handleFindCorrectAns = (quizId, optionId) => {
    dispatch(
      solveQuizsByUser({
        quizId,
        optionId,
      }),
    );
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.questionIndexContainer}>
        <Text style={styles.questionIndexText}>QUESTION {index + 1}</Text>
      </View>
      <Text style={styles.questionText}>{question}</Text>
      <View style={styles.tagsContainer}>
        <View style={styles.difficultyLevelContainer}>
          <Text style={styles.tags}>
            {difficulty[0].toUpperCase() +
              difficulty.slice(1, difficulty.length)}
          </Text>
          <MaterialDesignIcons
            name={difficultyIcons[difficulty]}
            size={14}
            color="#777"
          />
        </View>
        <TagContainer
          text={subject.name}
          iconName={"library-outline"}
          iconColor={"#777"}
          iconSize={14}
        />
        <View style={styles.difficultyLevelContainer}>
          <Text style={styles.tags}>{topic}</Text>
        </View>
      </View>

      <QuizOptions
        options={options}
        handleFindCorrectAns={handleFindCorrectAns}
        id={id}
      />
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 20,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 50,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: Colors.surface,
  },

  questionIndexContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    marginBottom: 10,
  },
  questionIndexText: {
    color: Colors.optionText,
    letterSpacing: 2.5,
    fontSize: 10,
  },
  questionText: {
    fontSize: 16,
    fontFamily: Fonts.spaceRegular,
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginVertical: 8,
  },
  tags: {
    fontSize: 10,
    color: Colors.difficultyText,
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
