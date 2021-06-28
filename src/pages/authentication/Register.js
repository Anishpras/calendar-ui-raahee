import React, { useState } from "react";
import "./_register.scss";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import db from "../../firebase.utils";

function Register() {
  const history = useHistory("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const code = "RaheeAdmin";
  async function register(event) {
    event.preventDefault();
    if (secretCode !== code) {
      return setError("Secret code not valid");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      signup(email, password).then((auth) => {
        if (auth.user) {
          auth.user.updateProfile({
            displayName: name,
          });
          db.collection("mhp")
            .doc(auth.user.uid)
            .set({
              displayName: name,
              fullName: name,
              email: email,
              RCIlicense: '',
              accountHolderName: name,
              bankAccount: '',
              credits: 0,
              degrees: '',
              documentsUrl: [],
              experience: '',
              gender: 'Other',
              gstNumber: '',
              ifscCode: '',
              kindOfProfessional: 'Psychologist',
              languages: ['English', 'Hindi'],
              location: '',
              panNumber: '',
              phoneNumber: '',
              profileCreatedTimestamp: new Date(),
              speciality: [],
              upiId: '',
              verificationStage: 'registered',
              workEx: [],
            })
            .then((s) => {
              history.push("/admin");
            });
        }
      });
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
          {error && <p>{error}</p>}
        </div>{" "}
        <form className="register-form">
          <div className="registerForm-control">
            {" "}
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
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
          <div className="registerForm-control">
            <label htmlFor="name">Enter secret code</label>
            <input
              onChange={(e) => setSecretCode(e.target.value)}
              type="password"
              placeholder="Secret Code"
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
