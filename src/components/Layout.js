import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productsCart = useSelector((state) => state.cart);

  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  let countQuantity = 0;
  productsCart.map(
    (productCart) => (countQuantity = productCart.quantity + countQuantity)
  );

  return (
    <header className="header" >
      <Link className="linkh1Header" to="/home">
        <h1 className="h1Header">Jewelry Store</h1>
      </Link>
      <div className="divIconHeader">
        <div>
          <button className="iconHeader1" onClick={logOut}>
            <i className="fas fa-sign-out-alt"></i>
          </button>
          <a href="https://www.instagram.com/accounts/login/?next=/academlohq/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://yt3.ggpht.com/ytc/AKedOLSm2IwzXy8wXwDP7AvkrSYwHT8H333_WRW0Oyff=s176-c-k-c0x00ffffff-no-rj-mo">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <Link to="/cart" className="iconHeader2">
          <i className="fab fa-opencart"></i>
          <span>{countQuantity}</span>
        </Link>
      </div>
      <ul className="ulHeader">
        <li className="liHeader">
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

        {id ? (
          <li className="liHeader">
            <NavLink
              to={`/Shop/${id}`}
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
              Shop Detail
            </NavLink>
          </li>
        ) : (
          ""
        )}

        <li className="liHeader">
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
        <li className="liHeader">
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
        <li className="liHeader">
          <NavLink
            to="/Myorders"
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
            My orders
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Layout;
