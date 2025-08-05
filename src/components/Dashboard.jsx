import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const { name, email, password, action } = location.state || {};

  return (
    <div>
      <h1 style={{ color: "black", fontSize: "60px", textAlign: "center" }}>
        Dashboard
      </h1>
      <p style={{ fontSize: "24px", color: "black", textAlign: "center" }}>
        <strong>Name:</strong> {name}
      </p>
      <p style={{ fontSize: "24px", color: "black", textAlign: "center" }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ fontSize: "24px", color: "black", textAlign: "center" }}>
        <strong>Password:</strong> {password}
      </p>
    </div>
  );
}

export default Dashboard;
