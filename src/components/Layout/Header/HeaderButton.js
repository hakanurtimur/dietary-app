import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

export default function HeaderButton(props) {


    const [isButtonBumped, setIsButtonBumped] = useState(false)
    const cartCtx = useContext(CartContext);

    let calToNum = 0;

    useEffect( () => {
        if(calToNum < +cartCtx.totalCal) {
            return;
        } 
        setIsButtonBumped(true)

        const timer = setTimeout(() => {
            setIsButtonBumped(false)
        }, 300)
        
        return () => {clearTimeout(timer)}



    }, [calToNum, cartCtx])

    calToNum = +cartCtx.totalCal

    const btnClasses = `${classes.button} ${isButtonBumped && classes.bump}`
    


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Diet</span>
      <span className={classes.badge}>{calToNum} CALS</span>
    </button>
  );
}
