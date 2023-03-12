import React from "react";

const CartContext = React.createContext(
    {
        items: [],
        totalCal: 0,
        addItem: (item) => {},
        removeItem: (amount) => {},
        cho: 0,
        prt: 0,
        fat: 0,
        amount: 0,
        
    }
)

export default CartContext;