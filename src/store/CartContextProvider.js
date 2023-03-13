import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    

    

    
    const newTotalCal = state.totalCal + action.item.cal * action.item.amount;
    const newTotalCho = state.totalCho + action.item.cho * action.item.amount;
    const newTotalPrt = state.totalPrt + action.item.prt * action.item.amount;
    const newTotalFat = state.totalFat + action.item.fat * action.item.amount;
    

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    
    
    const existingCartItem = state.items[existingCartItemIndex]
    
    
   
    let updatedItems = [];

    if(existingCartItem) {

        const updatedItem = {

            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
        
    }
    else {
        updatedItems = state.items.concat(action.item);

    }
    return {
      items: updatedItems,
      totalCal: newTotalCal,
      totalCho: newTotalCho,
      totalFat: newTotalFat,
      totalPrt: newTotalPrt,
      amount: 0
    };
  }
  if(action.type === 'REMOVE') {


    
    const existingCartItemIndex = state.items.findIndex(e => e.id === action.id)

    const existingCartItem = state.items[existingCartItemIndex]


    const newTotalCal = state.totalCal - existingCartItem.cal;
    const newTotalCho = state.totalCho - existingCartItem.cho;
    const newTotalPrt = state.totalPrt - existingCartItem.prt;
    const newTotalFat = state.totalFat - existingCartItem.fat;

    console.log(existingCartItem)


    let updatedItems = [];
    let updatedItem;
   
    
      if(existingCartItem.amount > 1) {
        updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        
        
      }else {
        updatedItems = [...state.items.slice(0, existingCartItemIndex), ...state.items.slice(existingCartItemIndex + 1)];
      }
      return {
        items: updatedItems,
        totalCal: newTotalCal,
        totalCho: newTotalCho,
        totalFat: newTotalFat,
        totalPrt: newTotalPrt,
        amount: 0
      };
    

  }

  return;
};

const cartDefault = {
  items: [],
  totalCal: 0,
  totalCho: 0,
  totalFat: 0,
  totalPrt: 0,
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
    totalCho: cartState.totalCho,
    totalFat: cartState.totalFat,
    totalPrt: cartState.totalPrt,
    amount: cartState.amount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
