import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
  questions: [
    {
      id: 0,
      title: "Question 1",
      chosen: null,
      correct: "false",
    },
    {
      id: 1,
      title: "Question 1",
      chosen: null,
      correct: "false",
    },
    {
      id: 2,
      title: "Question 2",
      chosen: null,
      correct: "true",
    },
    {
      id: 3,
      title: "Question 3",
      chosen: null,
      correct: "false",
    },
    {
      id: 4,
      title: "Question 4",
      chosen: null,
      correct: "true",
    },
    {
      id: 5,
      title: "Question 5",
      chosen: null,
      correct: "true",
    },
  ],
};

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    pickAnswer(state, action) {
      state.questions[action.payload.id].chosen = action.payload.option;
    },
    sendChoices(state) {
      state.result = 0;
      state.questions.forEach((question) =>
        question.chosen === question.correct
          ? (state.result += 1)
          : (state.result += 0)
      );
    },
  },
});

export default questionnaireSlice.reducer;
export const { pickAnswer, sendChoices } = questionnaireSlice.actions;
