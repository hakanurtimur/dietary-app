import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

export default function HeaderButton(props) {

    const cartCtx = useContext(CartContext);
    const calToNum = +cartCtx.totalCal
    


  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Diet</span>
      <span className={classes.badge}>{calToNum} CALS</span>
    </button>
  );
}
