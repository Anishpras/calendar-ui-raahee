import React, { useState } from "react";
import ProfileForm from "./form/ProfileForm";
import Info from "./info/Info";
import { useAuth } from "../../contexts/AuthContext";
import "./_profile.scss";
const Profile = () => {
  const { currentUser } = useAuth();
  const [clicked, setClicked] = useState(currentUser);

  return (
    <div className="profile">
      {clicked ? (
        <Info />
      ) : (
        <ProfileForm clicked={clicked} setClicked={setClicked} />
      )}

      <button className="profile-button" onClick={() => setClicked(!clicked)}>
        {clicked ? `Edit Profile` : `Cancel`}
      </button>
    </div>
  );
};

export default Profile;
