import classes from "./AlterationItemForm.module.css"
import Input from "../../UI/Input/Input"


export default function AlterationItemForm(props) {


    return (
        <form className={classes.form}>

        <Input label="Amount" input={{
            min: "1",
            max: "5",
            defaultValue: "0",
            step: "1",
            id: "amount",
            type: "number"
        }}></Input>
        <button> + ADD</button>
        </form>
    )
}