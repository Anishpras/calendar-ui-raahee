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
            timeStart: 9,
            timeEnd: 17,
            weekDaysChecked: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
          });
        }
      });
  }, [currentUser.uid]);
  return (
    <div className="profile-container">
      <div className="info-container">
        <div className="profileImage">
          <img src={profileData.photoURL} alt="" />
        </div>

        <h2>{profileData.name}</h2>
        <div className="info">
          {" "}
          <div className="info_bio">
            <p>{profileData.bio}</p>
          </div>
          <h4>{`Session Timing - ${profileData.sessionDuration} mins`}</h4>
          <h4>Days Available - </h4>
          {profileData.weekDaysChecked &&
            profileData.weekDaysChecked.map((days) => <span>{days}</span>)}
          <h4>{`Start time -  ${profileData.startTime}:00 hrs`}</h4>
          <h4>{`End time -  ${profileData.endTime}:00 hrs`}</h4>
          <h4>
            {profileData.fees ? ` Fees - ₹ ${profileData.fees}` : "Fees - ₹ 0"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Info;
