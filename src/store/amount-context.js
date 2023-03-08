import React from "react";

const AmountContext = React.createContext(
    {
    cho: 0,
    prt: 0,
    fat: 0,
    cal: 0,
    onAdd: (item, amount) => {},
    removeProduct: (id) => {},
    totalAmount: 0,
    }

)

export default AmountContext;