import React from "react";
import classes from "./Client.module.css";

export default function Client(props) {
  return (
    <div className={classes.clientInfo}>
      <div className={classes.clientItem}>
        First Name :<span> {props.client.firstname}</span>
      </div>
      <div className={classes.clientItem}>
        Last Name :<span>{props.client.lastname}</span>
      </div>
      <div className={classes.clientItem}>
        BMR =<span>{props.client.BMR}</span>
      </div>
      <div className={classes.clientItem}>
        Total Energy Expenditure =<span> {props.client.TEE}</span>
      </div>
      <div className={classes.clientItem}>
        BMI =<span>{props.client.BMI}</span>
      </div>
      <div className={classes.clientItem}>
        Target Energy =
        <span>
        {props.client.BMR} to {props.client.TEE}{" "}
        </span>
      </div>
    </div>
  );
}
