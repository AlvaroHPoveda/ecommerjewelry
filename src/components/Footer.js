import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  const { id } = useParams();

  return (
    <main className="mainfooter">
      <h2>Jewelry Store</h2>
      <div>
        <ul className="ulfooter">
          <li className="lifooter">
            <NavLink
              to="/Shop"
              style={({ isActive }) =>
                isActive && !id
                  ? {
                      textDecoration: "none",
                      color: "#000",
                      borderBottom: "1px solid #000",
                    }
                  : { textDecoration: "none", color: "#000" }
              }
            >
              Shop
            </NavLink>
          </li>

          <li className="lifooter">
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#000",
                      borderBottom: "1px solid #000",
                    }
                  : { textDecoration: "none", color: "#000" }
              }
            >
              About
            </NavLink>
          </li>
          <li className="lifooter">
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#000",
                      borderBottom: "1px solid #000",
                    }
                  : { textDecoration: "none", color: "#000" }
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="linkredes">
        <ul className="ulfooter">
          <li className="lifooter02">
            <a href="https://www.instagram.com/accounts/login/?next=/academlohq/">Instagram</a>
          </li>
          <li className="lifooter02">
            <a href="https://yt3.ggpht.com/ytc/AKedOLSm2IwzXy8wXwDP7AvkrSYwHT8H333_WRW0Oyff=s176-c-k-c0x00ffffff-no-rj-mo">Youtube</a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Footer;
