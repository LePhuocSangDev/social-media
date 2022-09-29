import {createReducer} from "@reduxjs/toolkit"

type InitialState = {
  loading:boolean,
  userInfo: object | null,
  isAuthenticated:boolean,
  error :object | null
}

const initialState: InitialState = {
  loading: false,
  userInfo: null,
  isAuthenticated: false,
  error : null
}

export const userReducer = createReducer(initialState,{
  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.userInfo = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.userInfo = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  LogoutRequest: (state) => {
    state.loading = true;
    },
  LogoutSuccess: (state, action) => {
    state.loading = false;
    state.userInfo = null;
    state.isAuthenticated = false;
    },
  LogoutFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },
  clearErrors: (state) => {
    state.error = null;
  },
})