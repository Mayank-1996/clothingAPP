import React from "react";
import { useDispatch } from "react-redux";
import {
  dropItem,
  decreaseItemQuantity,
  addItem,
} from "../../redux/cart/cart.actions";
import "./checkout.styles.scss";

export default function CheckoutItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          onClick={() => dispatch(decreaseItemQuantity(cartItem))}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => dispatch(dropItem(cartItem))}
        className="remove-button"
      >
        &#10008;
      </div>
    </div>
  );
}
