import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import your CSS file

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Bean There, Done That Budget Tracker</h1>
        <ul className="nav-links">
          <li>
            <Link to="/transactions" className="nav-link">
              Transactions
            </Link>
          </li>
          <li>
            <Link to="/transactions/new" className="nav-link">
              Add Transaction
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
