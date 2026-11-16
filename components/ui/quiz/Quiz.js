import {
  View,
  Text,
  StyleSheet,
  Vibration,
  Platform,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import * as Haptics from "expo-haptics";
import { solveQuizsByUser } from "../../../features/quiz/quizSlice";
import { useDispatch } from "react-redux";
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
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();

  const difficultyIcons = {
    easy: "signal-cellular-1",
    medium: "signal-cellular-2",
    hard: "signal-cellular-3",
  };

  const handleFindCorrectAns = (quizId, optionId, isCorrect) => {
    if (isCorrect) {
      Vibration.vibrate(250);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    dispatch(
      solveQuizsByUser({
        quizId,
        optionId,
      }),
    );
  };

  const outerContainerDynamicStyle = {
    paddingHorizontal: width < 400 ? 10 : 25,
    paddingVertical: height < 600 ? 25 : 45,
    marginVertical: height < 600 ? 15 : 20,
  };

  const questionIndexContainerDynamicStyle = {
    marginBottom: width < 400 ? 10 : 8,
    paddingBottom: width < 400 ? 8 : 7,
  };

  const questionIndexTextDynamicStyle = {
    fontSize: width < 400 ? 10 : 12,
  };

  const questionTextDynamicStyle = {
    fontSize: width < 400 ? 16 : 18,
  };

  const tagsContainerDynamicStyle = {
    gap: width < 400 ? 6 : 10,
    marginVertical: width < 400 ? 8 : 6,
  };

  const difficultyLevelContainerDynamicStyle = {
    paddingHorizontal: width < 400 ? 8 : 10,
  };
  return (
    <View style={[styles.outerContainer, outerContainerDynamicStyle]}>
      <View
        style={[
          styles.questionIndexContainer,
          questionIndexContainerDynamicStyle,
        ]}
      >
        <Text style={[styles.questionIndexText, questionIndexTextDynamicStyle]}>
          QUESTION {index + 1}
        </Text>
      </View>
      <Text style={[styles.questionText, questionTextDynamicStyle]}>
        {question}
      </Text>
      <View style={[styles.tagsContainer, tagsContainerDynamicStyle]}>
        <View
          style={[
            styles.difficultyLevelContainer,
            difficultyLevelContainerDynamicStyle,
          ]}
        >
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
        <View
          style={[
            styles.difficultyLevelContainer,
            difficultyLevelContainerDynamicStyle,
          ]}
        >
          <Text style={styles.tags}>{topic}</Text>
        </View>
      </View>

      <QuizOptions
        options={options}
        handleFindCorrectAns={handleFindCorrectAns}
        id={id}
        width={width}
        height={height}
      />
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  outerContainer: {
    elevation: 2,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: Colors.surface,
  },

  questionIndexContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    borderBottomWidth: 0.5,
  },
  questionIndexText: {
    color: Colors.optionText,
    letterSpacing: 2.5,
  },
  questionText: {
    fontFamily: Fonts.spaceRegular,
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tags: {
    fontSize: 10,
    color: Colors.difficultyText,
  },
  difficultyLevelContainer: {
    flexDirection: "row",
    gap: 4,
    paddingVertical: 4,
    // paddingHorizontal: 8,
    backgroundColor: Colors.difficultyBackground,
    color: Colors.difficultyText,
    borderRadius: 4,
  },
});
