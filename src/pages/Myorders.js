import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getmyOrdersThunk } from "../redux/actions";
import "../styles/myorders.css";

const Myorders = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.myOrders);

  useEffect(() => {
    dispatch(getmyOrdersThunk());
  }, [dispatch]);

  return (
    <main className="mainMyorders">
      <h2 className="h2Cart">MY ORDERS</h2>
      <div className="gridheadernameColumn">
        <div>
          <span>ITEM</span>
        </div>
        <div>
          <span>QUANTITY</span>
          <span>PRICE</span>
        </div>
      </div>
      <ul className="cart-list">
        {productsCart.map((productCart) => (
          <div className="gridCart" key={productCart.id}>
            <div className="gridCart-column01">
              <Link
                to={`/shop/${productCart.product.id}`}
                className="cart-column"
              >
                <div className="gridCart-column01">
                  <img
                    className="cart-imgShop"
                    src={productCart.product.images[0].url}
                    alt=""
                  />
                  <div>{productCart.product.name}</div>
                </div>
              </Link>
            </div>
            <div className="gridCart-column02">
              <input
                disabled
                className="inputCart"
                placeholder={productCart.quantity}
              ></input>
              <div>
                {(productCart.product.price * productCart.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default Myorders;
