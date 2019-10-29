import React from "react";
import { Link } from "react-router-dom";

function NavigationLinks({ token }) {
  if (token) {
    return (
      <>
        <Link to="/assistidos" className="nav-link">
          Assistidos
        </Link>
        <Link to="/#" className="nav-link">
          Para Assistir
        </Link>
      </>
    );
  }

  return null;
}

export default NavigationLinks;
