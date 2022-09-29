import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.scss";
import { useAppSelector } from "../../hooks/reduxHooks";

const Posts = () => {
  const { post } = useAppSelector((state) => state.post);

  const [posts, setPosts] = useState<object[]>();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/v1/post");
      setPosts(data);
    };
    fetchData();
  }, [post]);
  return (
    <div className="posts">
      {posts?.map((post: object) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
