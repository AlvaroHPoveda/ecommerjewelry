import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductThunk,
  getCategoryThunk,
  addProductCartThunk,
} from "../redux/actions";
import "../styles/shop-detail.css";
import "../styles/shop.css";

const ShopDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [position, setPosition] = useState(1);
  const [positionIndex, setPositionIndex] = useState(1);
  const [count, setCount] = useState();

  useEffect(() => {
    dispatch(getProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product.category?.id) {
      dispatch(getCategoryThunk(product.category?.id));
    }
  }, [dispatch, product]);

  let index = product.images?.findIndex(function (el) {
    return el.id == position;
  });

  useEffect(() => {
    setPositionIndex((index += 1));
  }, [positionIndex, index]);

  const width = {
    width: product.images?.length * 100 + "%",
    transform: `translateX(-${
      ((positionIndex - 1) * 100) / product.images?.length
    }%)`,
  };

  const addProducts = () => {
    const addproductCart = {
      product: id,
      quantity: count,
    };
    dispatch(addProductCartThunk(addproductCart));
  };

  return (
    <main className="mainShopDetail">
      <div className="divPart01ShopDetail">
        <div className="containerSlider">
          <div className="slider">
            <div className="containerSlider" style={width}>
              {product.images?.map((image) => {
                return (
                  <img
                    key={image.id}
                    className="imgShopDetail"
                    src={image.url}
                  />
                );
              })}
            </div>
            <div className="buttonsSlider">
              {product.images?.map((image) => {
                return (
                  <button
                    key={image.id}
                    className={
                      image.id === position
                        ? "buttonSlider active"
                        : "buttonSlider"
                    }
                    onClick={() => setPosition(image.id)}
                  />
                );
              })}
              <span>
                {positionIndex ? positionIndex : 1}/{product.images?.length}
              </span>
            </div>
          </div>
        </div>
        <div className="info">
          <h3>{product?.name}</h3>
          <span>{product?.price}</span>
          <p>{product?.description}</p>
          <div className="counter"></div>
          <label>quantity :</label>
          <div className="quantity">
            <input
              type="number"
              min="1"
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <button className="addCart" onClick={addProducts}>
            Add to cart
          </button>
        </div>
      </div>
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

export default ShopDetail;
