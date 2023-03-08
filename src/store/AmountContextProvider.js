import React, {useReducer} from "react";
import AmountContext from "./amount-context";


const totalAmountReducer = (state, action) => {
    if(action.type === 'ADD') {
        return {cho: state.cho + action.cho, prt: state.prt + action.prt, fat: state.fat + action.fat, cal: state.cal + action.cal}
    }
    
    return defaultAmount;
}


const defaultAmount = {
    cho: 0,
    prt: 0,
    fat: 0,
    cal: 0
}


export default function AmountContextProvider(props) {

    const [totalAmount, dispatchTotalAmount] = useReducer(totalAmountReducer, defaultAmount);

const addHandler = (item, amount) => {
    dispatchTotalAmount({type:'ADD', cho: item.cho*amount, prt: item.prt*amount, fat: item.fat*amount, cal: item.cal*amount})

}


    return (
    
    
    <AmountContext.Provider
    
    value={{
    cho: totalAmount.cho,
    prt: totalAmount.prt,
    fat: totalAmount.fat,
    cal: totalAmount.cal,
    onAdd: addHandler,
    removeProduct: (id) => {},
    totalAmount: totalAmount,


    }}>
        {props.children}
    </AmountContext.Provider>
)

}