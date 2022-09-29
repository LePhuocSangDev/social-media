import axios from "axios"

export const createNewPost = (caption: string, image:  any) => async (dispatch:any) => {
  try {
    dispatch({
      type: "newPostRequest",
    });

    const { data } = await axios.post(
      `/api/v1/post/upload`,
      {
        caption,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "newPostSuccess",
      payload: data,
    });
  } catch (error:any) {
    dispatch({
      type: "newPostFailure",
      payload: error.response.data.message,
    });
  }
};
export const deletePost = (id: string) => async (dispatch:any) => {
  try {
    dispatch({
      type: "deletePostRequest",
    });

    const { data } = await axios.delete(
      `/api/v1/post/delete/${id}`,
    );
    dispatch({
      type: "deletePostSuccess",
      payload: data.message,
    });
  } catch (error:any) {
    dispatch({
      type: "deletePostFailure",
      payload: error.response.data.message,
    });
  }
};

  
  
