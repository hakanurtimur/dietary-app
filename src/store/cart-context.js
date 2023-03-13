import React from "react";

const CartContext = React.createContext(
    {
        items: [],
        totalCal: 0,
        addItem: (item) => {},
        removeItem: (amount) => {},
        totalCho: 0,
        totalPrt: 0,
        totalFat: 0,
        amount: 0,
        
    }
)

export default CartContext;