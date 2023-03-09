import React from "react";


const AmountContext = React.createContext(
    {
        amounts: {},
        onAdd: (item) => {}

    }
)

export default AmountContext;