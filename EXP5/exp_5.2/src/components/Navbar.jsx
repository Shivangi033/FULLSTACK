import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import chopperLogo from "../assets/chopper.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar-modern">
      {/* Logo + Title */}
      <Link to="/" className="logo-link">
        <div className="brand-modern">
          <img src={chopperLogo} alt="Logo" className="brand-logo-modern" />
          <h2 className="logo-text">Experiment 5.2</h2>
        </div>
      </Link>

      {/* Buttons */}
      <div className="nav-links-modern">
        <button
          className={`nav-btn-modern ${
            location.pathname === "/" ? "active" : ""
          }`}
          onClick={() => navigate("/")}
        >
          Profile
        </button>

        <button
          className={`nav-btn-modern ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      </div>
    </nav>
  );
}
