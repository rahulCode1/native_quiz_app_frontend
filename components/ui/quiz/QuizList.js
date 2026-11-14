import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Question from "./Quiz";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { getQuestionsAsync } from "../../../features/quiz/quizSlice";

const QuizList = ({ quizs }) => {
  const isFetching = useRef(false);
  const { getQuizLoading, hasMore, loadingMore, pagination } = useSelector(
    (state) => state.quiz,
  );

  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    if (
      getQuizLoading === "loading" ||
      loadingMore ||
      !hasMore ||
      isFetching.current
    ) {
      return;
    }

    try {
      isFetching.current = true;
      await dispatch(getQuestionsAsync(pagination.currentPage + 1)).unwrap();
    } catch (err) {
      console.log(err, "Error occured fetching more questions.");
    } finally {
      isFetching.current = false;
    }
  };

  const renderQuizs = (itemData) => {
    return <Question {...itemData.item} index={itemData.index} />;
  };
  return (
    <FlatList
      data={quizs}
      renderItem={renderQuizs}
      keyExtractor={(item) => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loadingMore ? (
          <ActivityIndicator
            color={"orange"}
            size={20}
            style={{ marginVertical: 20 }}
          />
        ) : null
      }
    />
  );
};

export default QuizList;

const styles = StyleSheet.create({});
