import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  updateLocalStorage,
  deleteFromLocalStorage,
} from "./LocalStorage.ts";

function Dashboard() {
  const location = useLocation();
  const { name, email, password, action } = location.state || {};

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editPassword, setEditPassword] = useState(password);

  useEffect(() => {
    const savedUser = getFromLocalStorage("user");
    if (savedUser) {
      setEditName(savedUser.name || name);
      setEditEmail(savedUser.email || email);
      setEditPassword(savedUser.password || password);
    }

    if (name || email || password) {
      const userData = { name, email, password };
      saveToLocalStorage("user", userData);
      console.log("Data saved to localStorage:", userData);
    }
  }, [name, email, password]);

  const updateUserData = (field, value) => {
    updateLocalStorage("user", { [field]: value });
  };

  const clearUserData = () => {
    deleteFromLocalStorage("user");
    setEditName("");
    setEditEmail("");
    setEditPassword("");
  };

  const handleSave = () => {
    setIsEditing(false);
    const userData = {
      name: editName,
      email: editEmail,
      password: editPassword,
    };
    saveToLocalStorage("user", userData);
    console.log("Updated data saved to localStorage:", userData);
  };
  useEffect(() => {
    console.log("Current localStorage data:", localStorage.getItem("user"));
  }, []);
  return (
    <div className="container">
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
                onChange={(e) => {
                  setEditName(e.target.value);
                  updateUserData("name", e.target.value);
                }}
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
              onChange={(e) => {
                setEditEmail(e.target.value);
                updateUserData("email", e.target.value);
              }}
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
              onChange={(e) => {
                setEditPassword(e.target.value);
                updateUserData("password", e.target.value);
              }}
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
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={clearUserData}
            style={{
              background: "red",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Clear Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
