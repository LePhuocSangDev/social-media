import React, { useEffect, useState } from "react";
import "./loginPage.scss";
import { AiOutlineLogin } from "react-icons/ai";
import { TbLock } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { registerUser, loginUser } from "../../actions/user";
import { useAlert } from "react-alert";
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = ({ type }: { type: string }) => {
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const [name, setName] = useState("");
  const { error, loading } = useAppSelector((state: any) => state.user);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");

  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");

  const handleLogin = () => {
    dispatch(loginUser(loginEmail, loginPassword));
  };
  const handleRegister = () => {
    dispatch(registerUser(name, email, password, avatar));
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        typeof Reader.result === "string" && setAvatar(Reader.result);
      }
    };
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [alert, error, dispatch]);
  return (
    <div className="login">
      <h2>{type}</h2>

      {type === "Login" ? (
        <div className="login__container">
          <i className="login__icon">
            <AiOutlineLogin />
          </i>
          <form action="">
            <div className="login__input">
              <i>
                <CgProfile />
              </i>
              <input
                type="text"
                value={loginEmail}
                required
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="User name"
              />
            </div>
            <div className="login__input">
              <i>
                <TbLock />
              </i>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <label htmlFor="">
              <input type="checkbox" /> Keep me login
            </label>
          </form>
          <button className="login__button" onClick={handleLogin}>
            Login
          </button>
          <p className="login__register">
            Forgot Password? New User? <Link to="/register">Register</Link>
          </p>
          <div className="login__others">
            Or Login Using:
            <a href="#"></a>
            <a href="#">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              ;
            </a>
          </div>
        </div>
      ) : (
        <div className="login__container">
          <i className="login__icon">
            <AiOutlineLogin />
          </i>
          <form className="register__form" action="">
            <img className="register__form-avatar" src={avatar} alt="" />
            <input
              className="register__form-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="login__input">
              <i>
                <CgProfile />
              </i>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your User Name"
              />
            </div>
            <div className="login__input">
              <i>
                <CgProfile />
              </i>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="login__input">
              <i>
                <TbLock />
              </i>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
            </div>
          </form>
          <button
            onClick={handleRegister}
            className="login__button"
            disabled={loading}
          >
            Register
          </button>
          <p className="login__register">
            Have an Account? <Link to="/login">Login</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
