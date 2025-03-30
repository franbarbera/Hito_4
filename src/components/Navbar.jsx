import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const [token, setToken] = useState(false);
  const [total, setTotal] = useState(25000);

  const handleLogin = () => {
    setToken(true);
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setToken(false);
    setCurrentPage("home");
  };

  return (
    <nav className="navbar">
      <a href="#" onClick={() => setCurrentPage("home")}>
        🍕 Home
      </a>

      {token ? (
        <>
          <a href="#" onClick={() => setCurrentPage("profile")}>
            🔓 Profile
          </a>
          <a href="#" onClick={handleLogout}>
            🔒 Logout
          </a>
        </>
      ) : (
        <>
          <a href="#" onClick={() => setCurrentPage("login")}>
            🔐 Login
          </a>
          <a href="#" onClick={() => setCurrentPage("register")}>
            🔐 Register
          </a>
        </>
      )}

      <a href="#">🛒 Total: ${total.toLocaleString()}</a>
    </nav>
  );
};

export default Navbar;
