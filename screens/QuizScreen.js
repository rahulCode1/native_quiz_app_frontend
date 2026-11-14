import { View, Text, StyleSheet, Vibration } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuestionsAsync } from "../features/quiz/quizSlice";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import QuestionLists from "../components/ui/quiz/QuizList";

const QuizScreen = () => {
  const dispatch = useDispatch();
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

  return (
    <View style={styles.screen}>
      <QuestionLists quizs={quiz} />
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10,
  },
});
