import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import articleReducer from "../features/article/articleSlice";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    article: articleReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
