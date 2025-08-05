import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1 style={{ fontSize: "60px", color: "black", textAlign: "center" }}>
        Welcome to the Home Page
      </h1>
      <Link to="/login">
        <p style={{ fontSize: "24px", color: "white", textAlign: "center" }}>
          Please log in.
        </p>
      </Link>
    </div>
  );
};

export default Home;
