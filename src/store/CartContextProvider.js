import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    

    
    const newTotalCal = state.totalCal + action.item.cal * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(item => {
        return item.id === action.item.id;
    })
    
    
    const existingCartItem = state.items[existingCartItemIndex]
    
    
   
    let updatedItems = [];

    if(existingCartItem) {

        const updatedItem = {

            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
        }
        updatedItems[existingCartItemIndex] = updatedItem
        
    }
    else {
        updatedItems = state.items.concat(action.item);

    }
    return {
      items: updatedItems,
      totalCal: newTotalCal,
      cho: 0,
      fat: 0,
      prt: 0,
      amount: 0,
    
    };
  }

  if(action.type==='REMOVE') {
    const newTotalCal = state.totalCal - action.cal;

    const existingCartItemIndex = state.items.findIndex(item => {
        return item.id === action.item.id;
    })
    
    
    const existingCartItem = state.items[existingCartItemIndex]
    
    
   
    let updatedItems = [];

    if(existingCartItem) {

        const updatedItem = {

            ...existingCartItem,
            amount: existingCartItem.amount - action.item.amount
        }
        updatedItems[existingCartItemIndex] = updatedItem
        
    }
    else {
        updatedItems = state.items.concat(action.item);

    }
    return {
      items: updatedItems,
      totalCal: newTotalCal,
      cho: 0,
      fat: 0,
      prt: 0,
      amount: 0,
    
    };

  }

  return;
};

const cartDefault = {
  items: [],
  totalCal: 0,
  cho: 0,
  fat: 0,
  prt: 0,
  amount: 0,
  
};

export default function CartContextProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartDefault);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
    
  };
  const removeItemHandler = (id) => {
    dispatchCart({type:'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalCal: cartState.totalCal,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    cho: cartState.cho,
    fat: cartState.fat,
    prt: cartState.prt,
    amount: cartState.amount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
