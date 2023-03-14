import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import AlterationItemForm from "./AlterationItemForm";
import classes from "./AlterationsItem.module.css";

export default function AlterationsItem(props) {

  

  const cartCtx = useContext(CartContext);

  

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      cal: props.cal,
      cho: props.cho,
      fat: props.fat,
      prt: props.prt,
      amount: amount,
      name: props.name,
    });
  };


  return (
    <li className={classes.li}>
      <div className={classes.alterations}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.amounts}>
        <div className={classes.amount}>
          {props.item.alterationValue} <span> Alteration(s)</span>
        </div>
        <div className={classes.amount}>
          {props.item.alterationValue * props.cho} <span> grams CHO</span>
        </div>
        <div className={classes.amount}>
          {props.item.alterationValue * props.prt} <span> grams PRT</span>
        </div>
        <div className={classes.amount}>
          {props.item.alterationValue * props.fat} <span> grams FAT</span>
        </div>
        <div className={classes.amount}>
          {" "}
          <div className={classes.cals}>
            {" "}
            {props.item.alterationValue * props.cal} <span>CALS</span>
          </div>
        </div>
        <div>
          <AlterationItemForm
            onAddToCart={addToCartHandler}
          ></AlterationItemForm>
        </div>
      </div>
    </li>
  );
}
