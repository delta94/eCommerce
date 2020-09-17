import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingCartItem } from "../../models";
import {
  addItem,
  reduceQuantity,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./CheckoutItem.styles.scss";

interface Props {
  cartItem: ShoppingCartItem;
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(reduceQuantity(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
