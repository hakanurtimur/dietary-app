import React from "react";
import AlterationItemForm from "./AlterationItemForm";
import classes from "./AlterationsItem.module.css"

export default function AlterationsItem(props) {
  return (
    <li className={classes.li}>
      <div className={classes.alterations}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.amounts}>
      <div className={classes.amount}>1 <span> Porsion</span></div>
      <div className={classes.amount}>{props.cho} <span> grams CHO</span></div>
      <div className={classes.amount}>{props.prt} <span> grams FAT</span></div>
      <div className={classes.amount}>{props.fat} <span> grams PRT</span></div>
      <div className={classes.amount}> <div className={classes.cals}> {props.cal} <span>CALS</span></div></div>
      <div>
        <AlterationItemForm></AlterationItemForm>
      </div>
      </div>
      
    </li>
  );
}
