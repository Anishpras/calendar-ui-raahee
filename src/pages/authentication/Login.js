import React, { useState } from "react";
import "./_login.scss";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const history = useHistory("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const auth = await login(email, password);
      console.log(auth);
      history.push("/admin");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h3>Log In</h3>
          {error && <p>{error}</p>}
        </div>
        <form className="login-form">
          {" "}
          <div className="loginForm-control">
            {" "}
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="loginForm-control">
            {" "}
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button disabled={loading} type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </form>
        <center>
          <Link to="/register">
            <button className="button-register">Create New Account</button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default Login;
