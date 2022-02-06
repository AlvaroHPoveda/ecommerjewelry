import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsThunk,
  getCategoryThunk,
  filterHeadlineThunk,
} from "../redux/actions";
import "../styles/shop.css";

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (value) {
      dispatch(getCategoryThunk(value));
    }
  }, [dispatch, value]);

  const filterHeadline = (e) => {
    e.preventDefault();
    dispatch(filterHeadlineThunk(search));
  };

  return (
    <main className="mainShop">
      <form onSubmit={filterHeadline} className="divinputSearched">
        <input
          className="inputSearched"
          type="text"
          placeholder="Search Here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="buttonSearched">Search</button>
      </form>
      <dir className="divbutton">
        <button value="" onClick={() => navigate("/")} className="buttonShop1">
          All
        </button>
        <button
          value="1"
          onClick={(e) => setValue(e.target.value)}
          className="buttonShop"
        >
          Earrings
        </button>
        <button
          value="2"
          onClick={(e) => setValue(e.target.value)}
          className="buttonShop"
        >
          Necklaces
        </button>
        <button
          value="3"
          onClick={(e) => setValue(e.target.value)}
          className="buttonShop"
        >
          Ring
        </button>
        <button
          value="4"
          onClick={(e) => setValue(e.target.value)}
          className="buttonShop"
        >
          Bracelets
        </button>
      </dir>
      <ul className="products-list">
        {products.map((product) => (
          <Link
            to={`/shop/${product.id}`}
            key={product.id}
            className="products-column"
          >
            <img className="imgShop" src={product.images[0].url} alt="" />
            <img className="imgShop2" src={product.images[1].url} alt="" />
            <br />
            {product.name}
            <br />
            {product.price}
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Shop;
