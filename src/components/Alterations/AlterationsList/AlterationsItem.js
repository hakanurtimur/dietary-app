import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import AlterationItemForm from "./AlterationItemForm";
import classes from "./AlterationsItem.module.css";

export default function AlterationsItem(props) {
  const [isChanged, setIsChanged] = useState(false);

  const cartCtx = useContext(CartContext);

  const alterations = props.item.alterationValue;

  useEffect(() => {
    if (alterations < props.item.alterationValue) {
      return;
    }
    setIsChanged(true);

    const timer = setTimeout(() => {
      setIsChanged(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [alterations, props.item.alterationValue]);

  const valueClasses = `${classes.value} ${isChanged && classes.change}`;

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
          <span className={valueClasses}> {props.item.alterationValue} </span>
          <span className={classes.cont}> Alteration(s)</span>
        </div>
        <div className={classes.amount}>
          <span className={valueClasses}>
            {props.item.alterationValue * props.cho}{" "}
          </span>
          <span className={classes.cont}> grams CHO</span>
        </div>
        <div className={classes.amount}>
          <span className={valueClasses}>
            {props.item.alterationValue * props.prt}
          </span>{" "}
          <span className={classes.cont}> grams PRT</span>
        </div>
        <div className={classes.amount}>
          <span className={valueClasses}>
            {props.item.alterationValue * props.fat}{" "}
          </span>
          <span className={classes.cont}> grams FAT</span>
        </div>
        <div className={classes.amount}>
          {" "}
          <div className={classes.cals}>
            <span className={`${isChanged && classes.change}`}>{props.item.alterationValue * props.cal} </span>
            <span>CALS</span>
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
