import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/post";
import { userReducer } from "./reducers/user";


const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
