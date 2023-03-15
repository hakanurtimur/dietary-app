import React from "react";
import ClientInfoForm from "./ClientInfoForm";
import Card from "../UI/Card/Card";
import classes from './ClientInfo.module.css'

export default function ClientInfo() {


    return (
        <section className={classes.content}>
        <Card>
            <section className={classes.info}>
            <ClientInfoForm></ClientInfoForm>
            <div>BMR 1500</div>
            <div>Total Energy Expenditure 1800</div>
            <div>BMI 24</div>
            </section>
            
        </Card>
        </section>
    )
}