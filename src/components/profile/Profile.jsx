import React, { useState } from "react";
import ProfileForm from "./form/ProfileForm";
import Info from "./info/Info";

import "./_profile.scss";
const Profile = () => {
  const [clicked, setClicked] = useState(false);

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
