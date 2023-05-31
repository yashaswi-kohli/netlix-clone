import "./App.css";
import React, { useEffect } from "react";
import HomeScreen from "./components/homeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/login/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./components/profile/ProfileScreen";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
        if (userAuth) {
          // Log in
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          );
        } else {
          // Log out
          dispatch(logout());
        }
      });
    return unsubscribe;
  }, [dispatch]);

  return <div className="app">
    <Router>
      {!user ? (<LoginScreen />) : (
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/profile' element={<ProfileScreen />} />
        </Routes>
      )}
    </Router>
  </div>;
}

export default App;
