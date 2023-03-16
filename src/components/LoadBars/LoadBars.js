import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card/Card";
import classes from "./LoadBars.module.css";

export default function LoadBars() {
  const cartCtx = useContext(CartContext);

  console.log(Math.round(((cartCtx.totalCho * 4) / cartCtx.totalCal) * 100));

  const calOfCho = cartCtx.totalCho * 4;
  const calOfPrt = cartCtx.totalPrt * 4;
  const calOfFat = cartCtx.totalFat * 9;

  let barFillCho = "0%";
  let barFillPrt = "0%";
  let barFillFat = "0%";

  if (cartCtx.totalCal > 0) {
    barFillCho = `${Math.round((calOfCho / cartCtx.totalCal) * 100)}%`;
  }
  if (cartCtx.totalCal > 0) {
    barFillPrt = `${Math.round((calOfPrt / cartCtx.totalCal) * 100)}%`;
  }

  if (cartCtx.totalCal > 0) {
    barFillFat = `${Math.round((calOfFat / cartCtx.totalCal) * 100)}%`;
  }

  return (
    <section className={classes.loadBars}>
      <Card>
      
        <div className={classes.bars}>
        <h1>Percentages</h1>
        
          <div className={classes["chart-bar"]}>
            <div className={classes["chart-bar__inner"]}>
              <div
                className={classes["chart-bar__fill"]}
                style={{ height: barFillCho }}
              ></div>
            </div>
            <div className={classes["chart-bar__label"]}>CHO
            <strong>({barFillCho})</strong></div>
          </div>
          <div className={classes["chart-bar"]}>
            <div className={classes["chart-bar__inner"]}>
              <div
                className={classes["chart-bar__fill"]}
                style={{ height: barFillPrt }}
              ></div>
            </div>
            <div className={classes["chart-bar__label"]}>PRT<strong>({barFillPrt})</strong></div>
          </div>
          <div className={classes["chart-bar"]}>
            <div className={classes["chart-bar__inner"]}>
              <div
                className={classes["chart-bar__fill"]}
                style={{ height: barFillFat }}
              ></div>
            </div>
            <div className={classes["chart-bar__label"]}>FAT<strong>({barFillFat})</strong></div>
          </div>
        </div>
      </Card>
    </section>
  );
}
