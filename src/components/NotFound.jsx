import { useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 style={{ fontSize: "60px", color: "black", textAlign: "center" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "24px", color: "black", textAlign: "center" }}>
        The page you are looking for does not exist.
      </p>
      <button style={{ display: "block", margin: "20px auto" }}>
        <Link to="/home">Go to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
