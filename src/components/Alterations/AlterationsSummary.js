import React from "react";
import classes from './AlterationsSummary.module.css'
export default function AlterationsSummary() {
  return (
    <section className={classes.summary}>
      <h2>We make dieting easy.</h2>
      <p>
        Thanks to the choices you will make in the changes below, we have made
        the changes you will use while creating your diet, the energy
        percentages of macronutrients and the necessary parameters depending on
        the person's daily energy expenditure accessible.
      </p>
    </section>
  );
}
