import React from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderButton.module.css"


export default function HeaderButton(props) {


    return (
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>



<CartIcon></CartIcon>
        </span>
        <span >Your Diet</span>
        <span className={classes.badge}>
        1500
        </span>


        </button>
    )
}