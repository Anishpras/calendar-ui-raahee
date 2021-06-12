import React, { useState } from "react";
import "./_register.scss";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import db from "../../firebase.utils";

function Register() {
  const history = useHistory("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);

  async function register(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const auth = await signup(email, password);
      if (auth.user) {
        auth.user.updateProfile({
          displayName: firstName,
        });
        db.collection("mhp")
          .doc(auth.user.uid)
          .set({
            name: firstName,
            email: email,
          })
          .then((s) => {
            history.push("/admin");
          });
      }
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="register">
      <div className="register-container">
        {" "}
        <div className="register-header">
          <h1>Register</h1>
          {error && <p variant="danger">{error}</p>}
        </div>{" "}
        <form className="register-form">
          <div className="registerForm-control">
            {" "}
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="registerForm-control">
            {" "}
            <label htmlFor="name">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="registerForm-control">
            <label htmlFor="name">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="registerForm-control">
            {" "}
            <label htmlFor="name">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <button
            disabled={loading}
            onClick={register}
            type="submit"
            className="register__register">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
