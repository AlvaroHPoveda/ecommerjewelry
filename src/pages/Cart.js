import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductCartThunk,
  changeQuantityProductCartThunk,
  getcartThunk,
  setmyOrdersThunk,
} from "../redux/actions";
import "../styles/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart);

  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    dispatch(getcartThunk());
  }, [dispatch]);

  const deleteProduct = (id) => {
    dispatch(deleteProductCartThunk(id));
  };

  useEffect(() => {
    const array = [];
    let result = 0;
    productsCart.map((productCart) => {
      array.push(parseInt(productCart.product?.price * productCart.quantity));
    });
    for (let i = 0; i < array.length; i++) {
      result = array[i] + result;
    }
    setSubTotal(result.toFixed(2));
  }, [productsCart]);

  const changeQuantity = (quantity, id) => {
    const changeQuantityCart = {
      quantity: quantity,
    };
    dispatch(changeQuantityProductCartThunk(changeQuantityCart, id));
  };

  return (
    <main className="mainCart">
      <h2 className="h2Cart">SHOPPING CART</h2>
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
              <button
                className="cart-button"
                onClick={() => deleteProduct(productCart.id)}
              >
                X
              </button>
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
                className="inputCart"
                placeholder={productCart.quantity}
                onChange={(e) =>
                  changeQuantity(parseInt(e.target.value), productCart.id)
                }
              ></input>
              <div>
                {(productCart.product.price * productCart.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div className="subTotal">
        <b>Subtotal $</b>
        <h3>{subTotal}</h3>
      </div>
      <div className="divbuttonCheckout">
        <button
          className="buttonCheckout"
          onClick={() => dispatch(setmyOrdersThunk())}
        >
          CHECKOUT
        </button>
      </div>
    </main>
  );
};

export default Cart;
