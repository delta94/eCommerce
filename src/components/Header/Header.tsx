import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { User, StoreState } from "../../models";
import "./Header.styles.scss";

const Header = () => {
  const cartHidden: boolean = useSelector(
    (state: StoreState) => state.cart.hidden
  );

  const currentUser: User | null = useSelector(
    (state: StoreState) => state.user.currentUser
  );

  return (
    <header>
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropdown />}
    </header>
  );
};

export default Header;
