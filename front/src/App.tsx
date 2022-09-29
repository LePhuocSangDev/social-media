import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./App.scss";
import Layout from "./Layout/Layout";
import Homepage from "./pages/HomePage/Homepage";
import FriendPage from "./pages/FriendPage/FriendPage";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  const user = useSelector((state: any) => state.user.userInfo);
  return (
    <GoogleOAuthProvider clientId="">
      <div className="App">
        <>
          <Routes>
            <Route
              path="/login"
              element={
                user ? <Navigate to="/" replace /> : <LoginPage type="Login" />
              }
            />
            <Route
              path="/register"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <LoginPage type="register" />
                )
              }
            />
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/friends" element={<FriendPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
            </Route>
          </Routes>
        </>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
