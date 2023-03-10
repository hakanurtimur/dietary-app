import { useReducer, useContext, useEffect } from "react";
import AmountContext from "../../../store/AmountContext";
import DietForm from "./DietForm";
import classes from "./DietItem.module.css";

const totalAmountReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      cho: state.cho + action.cho,
      prt: state.prt + action.prt,
      fat: state.fat + action.fat,
      cal: state.cal + action.cal,
      amount: state.amount + action.amount,
    };
  }

  return defaultAmount;
};

const defaultAmount = {
  cho: 0,
  prt: 0,
  fat: 0,
  cal: 0,
  amount: 0,
};
export default function DietItem(props) {
  const [totalAmount, dispatchTotalAmount] = useReducer(
    totalAmountReducer,
    defaultAmount
  );

  const amountCtx = useContext(AmountContext);

  useEffect(() => {
    setTimeout(() => {amountCtx.onAdd(totalAmount)}, 500);
  }, [amountCtx]);

  const addHandler = (item, amount) => {
    dispatchTotalAmount({
      type: "ADD",
      cho: item.cho * amount,
      prt: item.prt * amount,
      fat: item.fat * amount,
      cal: item.cal * amount,
      amount: amount,
    });
  };

  const product = props.item;

  return (
    <li className={classes.list}>
      <div className={classes.li}>
        <span>
          <h3>{props.item.name}</h3>
        </span>
        <span className={classes.amount}>
          <div className={classes.number}>{totalAmount.amount}</div>
          <div>Total (Porsion)</div>
        </span>
        <span className={classes.amount}>
          <div className={classes.number}>{totalAmount.cho}</div>
          <div>Total Gram (CHO)</div>
        </span>
        <span className={classes.amount}>
          <div className={classes.number}>{totalAmount.prt}</div>
          <div>Total Gram (PRT)</div>
        </span>
        <span className={classes.amount}>
          <div className={classes.number}>{totalAmount.fat}</div>
          <div>Total Gram (FAT)</div>
        </span>
        <span className={classes.amount}>
          <div className={classes.number}>{totalAmount.cal}</div>
          <div>Total Cal(kcals)</div>
        </span>
      </div>
      <div className={classes.form}>
        <DietForm onAdd={addHandler} product={product}></DietForm>
      </div>
    </li>
  );
}
