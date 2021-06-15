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
      {clicked ? <Info /> : <ProfileForm />}

      <button className="profile-button" onClick={() => setClicked(!clicked)}>
        {clicked ? `Edit Changes` : `Cancel`}
      </button>
    </div>
  );
};

export default Profile;
