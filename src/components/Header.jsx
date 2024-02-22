// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// Imports
import React from "react";
import Nav from "./Nav";
import "../styles/Header.css";

// Function that renders the header & exports
export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
      <p id="header-text">DEVIN SHADE</p>
      <img src="src/assets/Headshot.jpeg" alt="Devin's headshot"/>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}