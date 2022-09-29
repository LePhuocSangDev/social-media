import axios from "axios"
export const registerUser =
  (name: string, email: string, password: string, avatar:any) => async (dispatch:any) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/register",
        { name, email, password, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
    } catch (error: any) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };
export const loginUser =
  ( email: string, password: string) => async (dispatch:any) => {
    try {
      dispatch({
        type: "LoginRequest",
      });

      const { data } = await axios.post(
        "/api/v1/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "LoginSuccess",
        payload: data.user,
      });
    } catch (error: any) {
      dispatch({
        type: "LoginFailure",
        payload: error.response.data.message,
      });
    }
  };
  export const logoutUser =
  () => async (dispatch:any) => {
    try {
      dispatch({
        type: "LogoutRequest",
      });

      await axios.get(
        "http://localhost:5000/api/v1/logout"       
      );

      dispatch({
        type: "LogoutSuccess"
      });
    } catch (error: any) {
      dispatch({
        type: "LogoutFailure",
        payload: error.response.data.message,
      });
    }
  };
