import React, { useEffect, useState } from "react";
import db from "../../../firebase.utils";
import { useAuth } from "../../../contexts/AuthContext";
import "../_profile.scss";
const Info = () => {
  const [profileData, setProfileData] = useState({});
  const { currentUser } = useAuth();
  useEffect(() => {
    db.collection("mhp")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("hey");
          setProfileData(doc.data());
        } else {
          console.log("hello");
          setProfileData({
            name: "",
            photoURL: "",
            bio: "",
            sessionDuration: 0,
            fees: "",
            weekDaysChecked: [
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
            ],
          });
        }
      });
  }, []);
  return (
    <div className="profile-container">
      <div className="info-container">
        <div className="profileImage">
          <img src={profileData.photoURL} alt="" />
        </div>

        <h2>{profileData.name}</h2>
        <div className="info">
          {" "}
          <p>{profileData.bio}</p>
          <h3>{`Session Timing - ${profileData.sessionDuration} mins`}</h3>
          <h4>Days Available - </h4>
          {profileData.weekDaysChecked &&
            profileData.weekDaysChecked.map((days) => <span>{days}</span>)}
          <h4>
            {profileData.fees ? ` Fees - ${profileData.fees}` : "Fees - 0"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Info;
