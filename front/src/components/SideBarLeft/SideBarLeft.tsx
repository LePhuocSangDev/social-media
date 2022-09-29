import React, { useState } from "react";
import "./SideBarLeft.scss";
import logo from "../../asset/img/logo.png";
import { BsNewspaper } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";

interface Type {
  showSbLeft: boolean;
  setShowSbLeft: any;
}

const SideBarLeft = ({ showSbLeft, setShowSbLeft }: Type) => {
  return (
    <div className="sb-left">
      <div className="sb-left__menu">
        {showSbLeft && (
          <img className="sb-left__menu-img1 " src={logo} alt="" />
        )}
        <BiMenuAltRight
          className="sb-left__menu-icon"
          style={{ fontSize: "3rem" }}
          onClick={() => setShowSbLeft((prev: boolean) => !prev)}
        />
      </div>
      {showSbLeft && (
        <ul className="sb-left__options">
          <li className="sb-left__option">
            <i>
              {" "}
              <BsNewspaper />
            </i>
            <a>Newsfeed</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Members Timeline</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Groups</a>
          </li>
          <li className="sb-left__option">
            <i>
              {" "}
              <BsNewspaper />
            </i>
            <a>
              Friends Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Gallery</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
          <li className="sb-left__option">
            <i>
              <BsNewspaper />
            </i>
            <a>Videos</a>
          </li>
        </ul>
      )}
      {showSbLeft || (
        <div className="sb-left__short">
          <a className="sb-left__menu-short" href="">
            {" "}
            <BsNewspaper />
          </a>
          <a className="sb-left__menu-short" href="">
            {" "}
            <BsNewspaper />
          </a>
          <a className="sb-left__menu-short" href="">
            {" "}
            <BsNewspaper />
          </a>
          <a className="sb-left__menu-short" href="">
            {" "}
            <BsNewspaper />
          </a>
          <a className="sb-left__menu-short" href="">
            {" "}
            <BsNewspaper />
          </a>
          <a className="sb-left__menu-short" href="">
            {" "}
            <BsNewspaper />
          </a>
        </div>
      )}
    </div>
  );
};

export default SideBarLeft;
