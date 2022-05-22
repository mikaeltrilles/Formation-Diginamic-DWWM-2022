import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navigation = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive ? "nav-link nav-active" : "nav-link "
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/mention"
            className={(nav) =>
              nav.isActive ? "nav-link nav-active" : "nav-link "
            }
          >
            Mentions légales
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/credit"
            className={(nav) =>
              nav.isActive ? "nav-link nav-active" : "nav-link "
            }
          >
            Crédits
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
