import React, {useRef, useState} from "react"
import classes from "./AlterationItemForm.module.css"
import Input from "../../UI/Input/Input"



export default function AlterationItemForm(props) {

    const [amountIsValid, setAmountIsValid] = useState(true)

    


    const amountRef = useRef()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const amountNumber = +amountRef.current.value;

        if(amountNumber < 1 || amountNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(amountNumber)
        
    }




    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>

        <Input ref={amountRef} label="Amount" input={{
            min: "1",
            max: "10",
            defaultValue: "1",
            step: "1",
            id: "amount",
            type: "number"
        }}></Input>
        <button> + ADD</button>
        {!amountIsValid && <h5>Please enter valid number!</h5>}
        </form>
    )
}