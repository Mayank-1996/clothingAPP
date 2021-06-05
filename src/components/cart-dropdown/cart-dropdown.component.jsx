import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toggleCart } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custombutton.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} cartitem={item} />)
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

export default memo(CartDropdown);
