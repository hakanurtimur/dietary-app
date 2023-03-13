import React, {useContext} from "react";
import CartContext from "../../../store/cart-context";
import AlterationItemForm from "./AlterationItemForm";
import classes from "./AlterationsItem.module.css"

export default function AlterationsItem(props) {

    const cartCtx = useContext(CartContext)


    const addToCartHandler = (amount) => {
        

        cartCtx.addItem({
            id: props.id,
            cal: props.cal,
            cho: props.cho,
            fat: props.fat,
            prt: props.prt,
            amount: amount,
            name: props.name
        })
        
    }
    
    console.log(cartCtx.items[0])

  return (
    <li className={classes.li}>
      <div className={classes.alterations}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.amounts}>
      <div className={classes.amount}>0 <span> Alteration(s)</span></div>
      <div className={classes.amount}>{props.cho} <span> grams CHO</span></div>
      <div className={classes.amount}>{props.prt} <span> grams FAT</span></div>
      <div className={classes.amount}>{props.fat} <span> grams PRT</span></div>
      <div className={classes.amount}> <div className={classes.cals}> {props.alterationData.totalCal} <span>CALS</span></div></div>
      <div>
        <AlterationItemForm onAddToCart = {addToCartHandler}></AlterationItemForm>
      </div>
      </div>
      
    </li>
  );
}
