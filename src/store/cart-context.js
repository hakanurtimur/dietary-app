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
        dairyProduct: 0,
        meatProduct: 0,
        breadProduct: 0,
        vegetableProduct: 0,
        fruitProduct: 0,
        fatProduct: 0
    }
)

export default CartContext;