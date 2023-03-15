import React, {useRef} from "react";

import classes from "./ClientInfoForm.module.css";

export default function ClientInfoForm(props) {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const ageRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const palRef = useRef();
  const genderRef = useRef();
  



  const submitHandler = (event) => {
    event.preventDefault()
    
    console.log(ageRef.current.value)
    const ageValue = +ageRef.current.value;
    const heightValue = +heightRef.current.value;
    const weightValue = +weightRef.current.value;
    const palValue = +palRef.current.value
  
    let BMR = 0;
  
    if (genderRef.current.value === "Male") {
      BMR = 66.5 + 13.75 * weightValue + 5.003 * heightValue - 6.75 * ageValue;
    } else {
      BMR = 655.1 + 9.563 * weightValue + 1.85 * heightValue - 4.676 * ageValue;
    }
  
    const fixedBMR = BMR.toFixed(0);
  
    const TEE = BMR * palValue;
  
    const fixedTEE = TEE.toFixed(0);
  
    const BMI = (weightValue / heightValue / heightValue) * 10000;
  
    const fixedBMI = BMI.toFixed(2);


    console.log({
        firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      age: ageValue,
      height: heightValue,
      weight: weightValue,
      pal: palValue,
      gender: genderRef.current.value,
      bmr: fixedBMR,
      tee: fixedTEE,
      bmi: fixedBMI,
    })


    props.onAddClient({
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      age: ageValue,
      height: heightValue,
      weight: weightValue,
      pal: palValue,
      gender: genderRef.current.value,
      bmr: fixedBMR,
      tee: fixedTEE,
      bmi: fixedBMI,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputBox}>
        <label></label>
        <input ref={firstnameRef} type="text" required="required" />
        <span>First Name</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input ref={lastnameRef} type="text" required="required" />
        <span>Last Name</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input ref={ageRef} type="number" required="required" />
        <span>Age</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input ref={heightRef} type="number" required="required" />
        <span>Height(cm)</span>
      </div>
      <div className={classes.inputBox}>
        <label></label>
        <input ref={weightRef} type="number" required="required" />
        <span>Weight(kg)</span>
      </div>
      <div className={classes.select}>
        <select ref={palRef} name="pal" id="pal-select" required="required">
          <option value="">Physical Activity Level(PAL) </option>
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
        
      </div>
      <div className={classes.select}>
        <select
          ref={genderRef}
          name="gender"
          id="gender-select"
          required="required"
        >
         <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        
      </div>
      <button type="submit"> Generate </button>
    </form>
  );
}
