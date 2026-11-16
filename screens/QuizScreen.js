import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuestionsAsync } from "../features/quiz/quizSlice";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import QuestionLists from "../components/ui/quiz/QuizList";

const QuizScreen = () => {
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  const { error, getQuizLoading, quiz } = useSelector((state) => state.quiz);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = await dispatch(getQuestionsAsync(1)).unwrap();
        // console.log(result)
      } catch (err) {
        console.log(err);
      }
    };

    fetchQuestions();
  }, [dispatch]);

  if (getQuizLoading === "loading") {
    return <LoadingSpinner size={40} quizs={quiz} />;
  }

  const deviceWidth = width < 450 ? "92%" : "80%";
  const deviceHeight = height < 600 ? 30 : 40;

  return (
    <View
      style={[
        styles.screen,
        { maxWidth: deviceWidth, marginTop: deviceHeight },
      ]}
    >
      <QuestionLists quizs={quiz} />
    </View>
  );
};

export default QuizScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    margin: "auto",
  },
});
