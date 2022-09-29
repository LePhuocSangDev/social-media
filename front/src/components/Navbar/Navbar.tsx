import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import "./Navbar.scss";
import logo from "../../asset/img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/user";
import { useToggle } from "../../hooks/useToggle";

const Navbar = ({ showSbLeft }: { showSbLeft: boolean }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.userInfo);
  const [showProfileOptions, toggle] = useToggle();

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser());
    toggle();
  };
  return (
    <div className="nav">
      <div className="nav-main">
        {showSbLeft || <img src={logo} alt="" className="nav-main__logo" />}
        <ul className="nav-main__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
        </ul>
        <div className="nav-main__search">
          <input type="text" placeholder="Search here..." />
          <button>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="nav-icons">
        <button>
          <FaUserFriends />
        </button>
        <button>
          <TiMessages />
        </button>
        <button>
          <IoMdNotifications />
        </button>
      </div>
      {user ? (
        <div className="nav-profile">
          <Link to="/profile">
            <img src={user.avatar.url} alt="" />
            <span>{user.name}</span>
          </Link>
          <button onClick={toggle} className="nav-profile__more">
            ...
          </button>
        </div>
      ) : (
        <Link to="/login" className="nav-login">
          Login
        </Link>
      )}

      {showProfileOptions && (
        <ul className="nav-profile__list">
          <li>
            <a href="">Profile Setting</a>
          </li>
          <li>
            <a href="">My Profile</a>
          </li>
          <li>
            <a href="">Admin</a>
          </li>
          <li>
            <a onClick={handleLogout} href="">
              Log Out
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
