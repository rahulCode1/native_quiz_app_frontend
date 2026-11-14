import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

export const getQuestionsAsync = createAsyncThunk(
  "question/allQuestions",
  async (page, { rejectWithValue }) => {
    try {
      const res = await api.get("/question", {
        params: {
          page,
          limit: 10,
        },
      });


      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch questions.",
      );
    }
  },
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: [],
    solvedQuizes: [],
    pagination: {
      currentPage: 0,
      totalPages: 0,
      totalQuestions: 0,
      limit: 10,
    },
    getQuizLoading: "idle",
    loadingMore: false,
    hasMore: true,

    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    solveQuizsByUser: (state, action) => {
      const { quizId, optionId } = action.payload;
      const quizIndex = state.quiz.findIndex((quiz) => quiz.id === quizId);

      const isAnswered = state.solvedQuizes.find(
        (quiz) => quiz.quizId === quizId && quiz.optionId === optionId,
      );

      if (isAnswered) {
        state.error = "Option selected already.";
        return;
      } else {
        state.solvedQuizes.push(action.payload);
      }

      if (quizIndex === -1) return;

      const options = state.quiz[quizIndex].options;

      if (quizIndex !== -1) {
        const optionIndex = state.quiz[quizIndex].options.findIndex(
          (option) => option.id === optionId,
        );

        const isCorrectAnswer =
          state.quiz[quizIndex].options[optionIndex].isCorrect;

        state.quiz[quizIndex].options[optionIndex].isAnswered = true;

        if (isCorrectAnswer) {
          for (let i = 0; i < options.length; i++) {
            if (options[i].isAnswered === false) {
              state.solvedQuizes.push({ optionId: options[i].id, quizId });
            }
          }
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestionsAsync.pending, (state, action) => {

      if (action.meta.arg === 1) {
        state.getQuizLoading = "loading";
      } else {
        state.loadingMore = true;
      }
      state.error = null;
    });

    builder.addCase(getQuestionsAsync.fulfilled, (state, action) => {
      const { questions, pagination } = action.payload;
      const requestedPage = action.meta.arg;

      
      if (requestedPage === 1) {
        state.quiz = questions;
      } else {
        state.quiz.push(...questions);
      }
      
      state.pagination = pagination;
      state.hasMore = pagination.currentPage < pagination.totalPages;
      state.getQuizLoading = "success";
      state.loadingMore = false;
    });
    builder.addCase(getQuestionsAsync.rejected, (state, action) => {
      state.getQuizLoading = "error";
      state.loadingMore = false;
      state.error = action.payload;
    });
  },
});

export const { clearError, solveQuizsByUser } = quizSlice.actions;

export default quizSlice;
