import React from "react";
import { Link } from "react-router-dom";

// Component that displays a navbar with a link to the specified path
const Navbar = (props) => {
  // Render the navbar with a Link to the specified path
  return (
    <div className="navbar">
      <Link to={props.path} style={{ textDecoration: "none" }}>
        <h2 >
          <span className=" brand-first-half">ALBUMS </span>
          <span className=" brand-last-half"> COLLECTION</span>
        </h2>

      </Link>
    </div>
  );
};

export default Navbar;
