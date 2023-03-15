import React, {useContext} from "react";
import ClientInfoForm from "./ClientInfoForm";
import Card from "../UI/Card/Card";
import classes from './ClientInfo.module.css'
import CartContext from "../../store/cart-context";


export default function ClientInfo() {


    const cartCtx = useContext(CartContext)

    const addClientHandler = (client) => {
        cartCtx.addClient(client)
        
    }
    console.log(cartCtx.client)


    return (
        <section className={classes.content}>
        <Card>
            <section className={classes.info}>
            <ClientInfoForm onAddClient={addClientHandler}></ClientInfoForm>
            <div className={classes.clientInfo}>
            <div>First Name               : {cartCtx.client.firstname}</div>
            <div>Last Name                : {cartCtx.client.lastname}</div>
            <div>BMR                      = {cartCtx.client.BMR}</div>
            <div>Total Energy Expenditure = {cartCtx.client.TEE}</div>
            <div>BMI                      = {cartCtx.client.BMI}</div>
            </div>
            </section>
            
        </Card>
        </section>
    )
}