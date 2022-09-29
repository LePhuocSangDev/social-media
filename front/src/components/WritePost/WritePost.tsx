import React, { useEffect, useState } from "react";
import "./WritePost.scss";
import { AiOutlineCamera } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { RiAttachment2 } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { createNewPost } from "../../actions/posts";
import { useAlert } from "react-alert";

const WritePost = () => {
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const { post } = useAppSelector((state) => state.post);
  console.log(post);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        typeof Reader.result === "string" && setImage(Reader.result);
      }
    };
  };

  const handleSubmitPost = (e: any) => {
    e.preventDefault();
    dispatch(createNewPost(caption, image));
    setCaption("");
  };

  useEffect(() => {
    post.error && alert.error(post.error);
    post.message && alert.success(post.message);
  }, [post.error, post.message, alert]);

  return (
    <div className="write-post">
      <ul className="write-options">
        <li className="write-option write-option__active">
          <a href="">
            <BiNotepad fontSize={"26px"} /> Status
          </a>
        </li>
        <li className="write-option ">
          <a href="">
            <HiOutlinePhotograph fontSize={"26px"} /> Photo/Video Album
          </a>
        </li>
        <li className="write-option ">
          <a href="">
            <GrNotes fontSize={"22px"} />
            Blog
          </a>
        </li>
      </ul>
      <form action="">
        <textarea
          placeholder="Share what are you thinking..."
          className="write-input"
          cols={30}
          rows={8}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <div className="write-submit">
          <div className="write-submit__icons">
            <label htmlFor="upload-photo">
              <AiOutlineCamera />
            </label>
            <input
              id="upload-photo"
              onChange={(e) => handleImageChange(e)}
              type="file"
            ></input>
            <label htmlFor="upload-video">
              <MdOutlineLocationOn />
            </label>
            <input
              id="upload-video"
              onChange={(e) => handleImageChange(e)}
              type="file"
            ></input>
            <label htmlFor="upload-photo">
              <RiAttachment2 />
            </label>
            <input
              id="upload-photo"
              onChange={(e) => handleImageChange(e)}
              type="file"
            ></input>
          </div>
          <button
            onClick={(e) => handleSubmitPost(e)}
            className="write-submit-post"
          >
            Post Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritePost;
