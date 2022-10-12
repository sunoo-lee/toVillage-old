import React from "react";
import MyProfile from "../components/MyProfile";

const Profile = ({ isNav }) => (
  <>
    <div className={isNav ? "container" : "container active"}>
      <MyProfile />
    </div>
  </>
);

export default Profile;
