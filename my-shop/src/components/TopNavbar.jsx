import { useNavigate } from "react-router-dom";
import "../index.css";

function TopNavbar() {
  const navigate = useNavigate();

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