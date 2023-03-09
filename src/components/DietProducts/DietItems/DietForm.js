



import React, {useRef} from "react"
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

    const amountRef = useRef()


    const submitHandler = (event) => {
        event.preventDefault();
        const num = +amountRef.current.value
        props.onAdd(props.product, num )    
      }
    return (
    <form onSubmit={submitHandler}>
      <Input ref= {amountRef} input={inputObject} label="Amount"></Input>
      <button>Add</button>
    </form>
    )

    
}