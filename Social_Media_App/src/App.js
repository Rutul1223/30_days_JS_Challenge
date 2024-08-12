import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import AddPost from "./pages/AddPost";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import AllPosts from "./pages/AllPosts";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    profileImage: "",
    posts: [],
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    // Check if a user is already logged in
    const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              allUsers={allUsers}
              setAllUsers={setAllUsers}
            />
          }
        />
        <Route
          path="/register"
          index
          element={
            <Register
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              allUsers={allUsers}
              setAllUsers={setAllUsers}
            />
          }
        />
        <Route
          path="/"
          element={
            <Layout
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
            />
          }
        >
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/allpost" element={<AllPosts />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
