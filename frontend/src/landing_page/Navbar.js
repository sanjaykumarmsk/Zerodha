import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg p-3 border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            style={{ height: "20px", width: "150px" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link me-2 active"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link me-2 active"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link me-2 active"
                aria-current="page"
                to="/product"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link me-2 active"
                aria-current="page"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link me-2 active"
                aria-current="page"
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
