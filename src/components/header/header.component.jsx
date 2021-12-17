import React from "react";
// import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  LinkOption,
  DivOption,
} from "./header.styled";

import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ user, cart, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <LinkOption to="/shop">SHOP</LinkOption>
        <LinkOption to="/contact">CONTACT</LinkOption>

        {user ? (
          <DivOption onClick={() => signOutStart()}>LOGOUT</DivOption>
        ) : (
          <LinkOption to="/signin">SIGN IN</LinkOption>
        )}
        <CartIcon />
      </OptionsContainer>
      {cart ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStateToProps = ({ user, cart }) => ({
  user: user.currentUser,
  cart: cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
