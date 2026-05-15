import { Search } from "lucide-react";
import { useState } from "react";
import "../index.css";

function TopNavbar({ searchQuery, setSearchQuery }) {
  return (
    <div className="top-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo-section">
          <img
            src="/miniminglelogo.jpeg"
            alt="Mini Mingle Logo"
            className="logo-img"
          />
          <h1 className="logo-text">Mini Mingle</h1>
        </div>

    

      </div>
    </div>
  );
}

export default TopNavbar;