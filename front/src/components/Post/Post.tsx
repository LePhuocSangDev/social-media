import React, { useEffect, useState } from "react";
import "./Post.scss";
import { AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { GoComment } from "react-icons/go";
import { IoIosShareAlt } from "react-icons/io";
import axios from "axios";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { deletePost } from "../../actions/posts";

const Post = ({ post }: { post: object }) => {
  const dispatch = useAppDispatch();
  const date = new Date(post.createdAt);
  const dateCreated =
    date.getDate() +
    " " +
    date.toLocaleString("default", { month: "long" }) +
    " " +
    date.getFullYear();
  const [owner, setOwner] = useState({});
  useEffect(() => {
    const fetchOwner = async () => {
      const { data } = await axios.get(`/api/v1/user/${post.owner}`);
      setOwner(data.user);
    };
    fetchOwner();
  }, []);

  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };
  return (
    <div className="post">
      <div className="post__heading">
        <div className="post__heading-details">
          <img className="friend-img" src={owner.avatar?.url} alt="" />
          <div>
            <h4>{owner.name}</h4>
            <p>{dateCreated}</p>
          </div>
        </div>
        <button onClick={handleDelete} className="post__heading-btn">
          ...
        </button>
      </div>
      <p className="post__desc">{post.caption}</p>
      {post.image && <img className="post__img" src={post.image.url} alt="" />}
      <div className="post__reaction">
        <div style={{ display: "flex", gap: "8px" }}>
          <div>
            <AiOutlineLike />
            <FcLike />
          </div>
          7.7K
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <span>273 comments</span>
          <span>1K share</span>
        </div>
      </div>
      <div className="post__actions">
        <button>
          <AiOutlineLike /> Like
        </button>
        <button>
          <GoComment /> Comment
        </button>
        <button>
          <IoIosShareAlt /> Share
        </button>
      </div>
    </div>
  );
};

export default Post;
