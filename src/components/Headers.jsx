import React from "react";
import { NavLink } from "react-router-dom";

export default function Headers() {
  const Logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("user-account");

    setTimeout(() => {
      window.location.replace("/login");
    }, 1000);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          PWL | Web-Chat
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Chapter-One
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"chapter-two"}>
                Chapter-Two
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"chapter-three"}>
                Chapter-Three
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {localStorage.getItem("user-account") !== null ? (
                <NavLink className="nav-link px-3" onClick={(e) => Logout(e)}>
                  Logout
                </NavLink>
              ) : (
                <NavLink className="nav-link px-3" to={"login"}>
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
