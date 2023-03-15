import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from "./ClientInfoForm.module.css";

export default function ClientInfoForm(props) {


    const cartCtx = useContext(CartContext)


    const onSubmitHandler = {
        
    }


  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.inputBox}>
        <label></label>
        <input type="text" required="required" />
        <span>First Name</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="text" required="required" />
        <span>Last Name</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="number" required="required" />
        <span>Age</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="number" required="required" />
        <span>Height(cm)</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input type="number" required="required" />
        <span>Weight(kg)</span>
      </div>
      <div className={classes.select}>
        <select name="pal" id="pal-select" required="required">
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
        <label>Physical Activity Level(PAL) </label>
      </div>
      <div className={classes.select}>
        <select name="gender" id="gender-select" required="required">
          <option value="">--Please choose an option--</option>
          <option value="dog">Male</option>
          <option value="cat">Female</option>
        </select>
        <label>Gender</label>
      </div>
    </form>
  );
}
