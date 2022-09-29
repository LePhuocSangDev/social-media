import React from "react";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";
import WritePost from "../../components/WritePost/WritePost";
import "./HomePage.scss";
import { useAppSelector } from "../../hooks/reduxHooks";

const Homepage = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  console.log(userInfo);
  return (
    <div className="home">
      <div className="home__left">
        <WritePost />
        <Posts />
      </div>
      <MoreInfo />
    </div>
  );
};

export default Homepage;
