import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">
          <Link to="/transactions">
            <i>Wild Beans</i>
          </Link>
          <br />
          <span className="budget-tracker">
            tracker for a tiny coffee bean shop on etsy
          </span>
        </h1>
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
