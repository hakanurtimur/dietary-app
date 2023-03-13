import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (item) => {

    cartCtx.removeItem(item)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          cal={item.cal}
          name={item.name}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <div>
          <span>Total CALS</span>
          <span>{cartCtx.totalCal}</span>
        </div>
        <div>
          <span>Total CHO(grams)</span>
          <span>{cartCtx.totalCho}</span>
        </div>
        <div>
          <span>Total PRT(grams)</span>
          <span>{cartCtx.totalFat}</span>
        </div>
        <div>
          <span>Total FAT(grams)</span>
          <span>{cartCtx.totalPrt}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button}>Print List</button>
      </div>
    </Modal>
  );
}
