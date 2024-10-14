import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./questionnaire/questionnaireSlice";

export const appStore = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});
