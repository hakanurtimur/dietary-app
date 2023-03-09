import React, { useState } from "react";
import AmountContext from "./AmountContext";


export default function AmountContextProvider (props) {




    const [amounts, setAmounts] = useState(
        {
            cho: 0,
            prt: 0,
            fat: 0,
            cal: 0
        }
    )

    const addAmountHandler = (item) => {
        setAmounts(item)
    }



    return (
        <AmountContext.Provider value={
            {
                amounts: amounts,
                onAdd: addAmountHandler
                }
        }>

        {props.children}
        </AmountContext.Provider>
    )




}