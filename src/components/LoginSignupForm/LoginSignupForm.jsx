import { useState } from "react";
import "./LoginSignupForm.css";

function LoginSignupForm() {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
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
            className={action === "Sign up" ? "submit gray" : "submit"}
            type="button"
            onClick={() => setAction("Login")}
          >
            Login
          </button>
          <button
            className={action === "Login" ? "submit gray" : "submit"}
            type="button"
            onClick={() => setAction("Sign up")}
          >
            Sign up
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
          {action === "Sign Up" ? <div></div> : <span>Forgot Password?</span>}
        </div>
        <div className="submit-container">
          <button className="submit" type="submit">
            {action === "Login" ? "Login" : "Sign Up"}
          </button>
          <div className="signup-text">
            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="signup-text">
                {"Not a member? "}
                <span>Signup now</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginSignupForm;
