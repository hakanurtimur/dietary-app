import React from "react";
import classes from "./ClientInfoForm.module.css";

export default function ClientInfoForm(props) {
  return (
    <form className={classes.form}>
      <div className={classes.inputBox}>
        <label></label>
        <input type="text" required="required"/>
        <span>Name</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="text" required="required"/>
        <span>Surname</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="number" required="required"/>
        <span>Age</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="number" required="required"/>
        <span>Height</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="number" required="required"/>
        <span>Weight</span>
      </div>
      <div className={classes.select}>
        <label>Physical Activity Level(PAL) </label>
        <select name="pal" id="pal-select">
          <option value="">--Please choose an option--</option>
          <option value="1.1">1.1</option>
          <option value="1.2">1.2</option>
          <option value="1.3">1.3</option>
          <option value="1.4">1.4</option>
          <option value="1.5">1.5</option>
          <option value="1.6">1.6</option>
          <option value="1.7">1.7</option>
          <option value="1.8">1.8</option>
          <option value="1.9">1.9</option>
          <option value="2">2</option>
          <option value="2.2">2.2</option>
        </select>
        <label>Gender</label>
        <select name="gender" id="gender-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Male</option>
          <option value="cat">Female</option>
        </select>
      </div>
    </form>
  );
}
