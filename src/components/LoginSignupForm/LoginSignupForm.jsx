import { useState } from "react";
import "./LoginSignupForm.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function LoginSignupForm() {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
    });
    navigate("/dashboard", {
      state: { name, email, password, action },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-header">
          {action === "Login" ? "Login Form" : "Sign Up Form"}
        </div>

        <div className="form-container">
          <button
            className={action === "Login" ? "submit" : "submit gray"}
            type="button"
            onClick={() => setAction("Login")}
          >
            Login
          </button>
          <button
            className={action === "Sign Up" ? "submit" : "submit gray"}
            type="button"
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
        </div>
        <div className="input">
          {action === "Login" ? null : (
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">
          {action === "Login" ? <span>Forgot Password?</span> : <div></div>}
        </div>
        <div className="submit-container">
          <button className="submit" type="submit">
            {action === "Login" ? "Login" : "Sign Up"}
          </button>
          <div className="signup-text">
            {action === "Sign Up" ? (
              <div className="signup-text">
                {"Already a member? "}
                <span
                  onClick={() => setAction("Login")}
                  style={{ cursor: "pointer" }}
                >
                  Login now
                </span>
              </div>
            ) : (
              <div className="signup-text">
                {"Not a member? "}
                <span
                  onClick={() => setAction("Sign Up")}
                  style={{ cursor: "pointer" }}
                >
                  Signup now
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginSignupForm;
