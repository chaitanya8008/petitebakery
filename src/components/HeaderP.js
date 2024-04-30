import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

const HeaderP = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
        <div className="div-container">
          <div className="nav-content">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/products">PRODUCTS</NavLink>
            <NavLink to="/contactus">CONTACT US</NavLink>
          </div>
          <div className="icons">
          <NavLink  className="icon-link" to="/login"> <FaUser /></NavLink>
          <NavLink className="icon-link cart-icon" to="/cart"><FaCartPlus />
          <div class="badge">0</div>
          </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderP;
