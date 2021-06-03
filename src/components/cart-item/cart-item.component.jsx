import React from "react";
import "./cart-item.styles.scss";

export default function CartItem({
  cartitem: { name, imageUrl, price, quantity },
}) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="loading" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
