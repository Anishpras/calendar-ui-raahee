import React from "react";
import "../_profile.scss";
const Info = () => {
  return (
    <div className="profile-container">
      <div className="profileImage">
        <img
          src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
          alt=""
        />
      </div>

      <h2>Lorem Ipsum</h2>
      <div className="info">
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          delectus eos, aut ullam laudantium amet reiciendis vitae placeat quia
          voluptas.
        </p>
        <h3>Session timing - 55 Minutes</h3>
        <h4>Days Available - Monday, Tuesday, Wednesday, Thursday, Friday</h4>
        <h4>Fees - Rs.500</h4>
      </div>
    </div>
  );
};

export default Info;
