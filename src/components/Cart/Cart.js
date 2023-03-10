import Modal from "../UI/Modal/Modal"
import classes from "./Cart.module.css"




export default function Cart(props) {


    const cartItems = <ul className={classes["cart-items"]}>{[{  id: "dairy-products",
name: "Dairy Products",
description: "1 glass of milk, 1 medium bowl of yogurt, etc.",
cho: 9,
prt: 6,
fat: 6,
cal: 114,}].map(item => <li key={item.id}>{item.name}</li>)}</ul>



    return (
        <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>1500 CALS</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        </Modal>
    )
}