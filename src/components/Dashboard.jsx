import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const { name, email, password, action } = location.state || {};

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editPassword, setEditPassword] = useState(password);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSave = () => {
    setIsEditing(false);
  };

  {
  }
  return (
    <div className="container">
      {showWelcome && (
        <div
          style={{
            color: "#0f0f0f",
            padding: "16px",
            textAlign: "center",
            fontSize: "22px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          Welcome User
        </div>
      )}
      <div>
        <h1 style={{ color: "black", fontSize: "60px", textAlign: "center" }}>
          Dashboard
        </h1>
        {action === "Sign Up" && (
          <p style={{ fontSize: "24px", color: "black", textAlign: "left" }}>
            <strong>Name:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            ) : (
              editName
            )}
          </p>
        )}
        <p style={{ fontSize: "24px", color: "black", textAlign: "left" }}>
          <strong>Email:</strong>{" "}
          {isEditing ? (
            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
          ) : (
            editEmail
          )}
        </p>
        <p style={{ fontSize: "24px", color: "black", textAlign: "left" }}>
          <strong>Password:</strong>{" "}
          {isEditing ? (
            <input
              type="password"
              value={editPassword}
              onChange={(e) => setEditPassword(e.target.value)}
            />
          ) : (
            editPassword
          )}
        </p>
        {isEditing ? (
          <div style={{ textAlign: "center" }}>
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
