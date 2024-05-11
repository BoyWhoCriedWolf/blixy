import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import { APP_NAME } from "constants/strings";

const LOCALSTORAGE_KEY_STORE = "LOCALSTORAGE_KEY_STORE-" + APP_NAME;

const persistedState = localStorage.getItem(LOCALSTORAGE_KEY_STORE);
const initialState = persistedState ? JSON.parse(persistedState) : {};

export const store = configureStore({
  // @ts-ignore
  reducer: { auth: authSlice },
  preloadedState: initialState,
});

// save store content
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(LOCALSTORAGE_KEY_STORE, JSON.stringify(state));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
