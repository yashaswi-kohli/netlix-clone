import React from "react";
import "./ProfileScreen.css";
import Nav from "../navBar/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function ProfileScreen() {

  const user = useSelector(selectUser)

  return (
    <div className="profile">
      <Nav />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="logout">
              <button onClick={() => auth.signOut()} className="profile_signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
