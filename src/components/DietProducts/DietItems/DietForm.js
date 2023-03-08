



import React, {useRef, useContext} from "react"
import AmountContext from "../../../store/amount-context";
import Input from "../../UI/Input/Input"


const inputObject = {
    
    id: "Amount ",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
    type: "number",
  };

  


export default function DietForm(props) {

    const amountCtx = useContext(AmountContext)

    const amountRef = useRef()


    const submitHandler = (event) => {
        event.preventDefault();
        amountCtx.onAdd(props.product, amountRef.current.value)
        console.log(amountRef.current.value)
      }
    return (
    <form onSubmit={submitHandler}>
      <Input ref= {amountRef} input={inputObject} label="Amount"></Input>
      <button>Add</button>
    </form>
    )

    
}