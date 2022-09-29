import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message:"",
  error:false,
  posts:[],
  post: {}
};

export const postReducer = createReducer(initialState, {
  newPostRequest: (state) => {
    state.loading = true;
  },
  newPostSuccess: (state, action) => {
    state.loading = false;
    state.post = action.payload;
  },
  newPostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getPostRequest: (state) => {
    state.loading = true;
  },
  getPostSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  getPostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  deletePostRequest: (state) => {
    state.loading = true;
  },
  deletePostSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deletePostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

 
});




