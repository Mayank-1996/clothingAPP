import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custombutton.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
