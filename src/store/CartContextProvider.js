import React, { useReducer } from "react";

import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let dairyProduct = state.dairyProduct;
    let meatProduct = state.meatProduct;
    let breadProduct = state.breadProduct;
    let vegetableProduct = state.vegetableProduct;
    let fruitProduct = state.fruitProduct;
    let fatProduct = state.fatProduct;
    if (action.item.id === "dairy-products") {
        dairyProduct += action.item.amount;
    } else if (action.item.id === "meat-products") {
      meatProduct= state.meatProduct + action.item.amount;
    } else if (action.item.id === "bread-substitute-products") {
      breadProduct = state.breadProduct + action.item.amount;
    } else if (action.item.id === "vegetable-products") {
      vegetableProduct = state.vegetableProduct + action.item.amount;
    } else if (action.item.id === "fruit-products") {
      fruitProduct = state.fruitProduct + action.item.amount;
    } else {
      fatProduct = state.fatProduct + action.item.amount;
    }
    const newTotalCal = state.totalCal + action.item.cal * action.item.amount;
    const newTotalCho = state.totalCho + action.item.cho * action.item.amount;
    const newTotalPrt = state.totalPrt + action.item.prt * action.item.amount;
    const newTotalFat = state.totalFat + action.item.fat * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems = [];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalCal: newTotalCal,
      totalCho: newTotalCho,
      totalFat: newTotalFat,
      totalPrt: newTotalPrt,
      dairyProduct: dairyProduct,
      meatProduct: meatProduct,
      breadProduct: breadProduct,
      vegetableProduct: vegetableProduct,
      fruitProduct: fruitProduct,
      fatProduct: fatProduct,

    };
  }
  if (action.type === "REMOVE") {


    let dairyProduct = state.dairyProduct;
    let meatProduct = state.meatProduct;
    let breadProduct = state.breadProduct;
    let vegetableProduct = state.vegetableProduct;
    let fruitProduct = state.fruitProduct;
    let fatProduct = state.fatProduct;
    if (action.id === "dairy-products") {
        dairyProduct -= 1;
    } else if (action.id === "meat-products") {
      meatProduct= state.meatProduct - 1;
    } else if (action.id === "bread-substitute-products") {
      breadProduct = state.breadProduct - 1;
    } else if (action.id === "vegetable-products") {
      vegetableProduct = state.vegetableProduct - 1;
    } else if (action.id === "fruit-products") {
      fruitProduct = state.fruitProduct - 1;
    } else {
      fatProduct = state.fatProduct - 1;
    } 
    const existingCartItemIndex = state.items.findIndex(
      (e) => e.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const newTotalCal = state.totalCal - existingCartItem.cal;
    const newTotalCho = state.totalCho - existingCartItem.cho;
    const newTotalPrt = state.totalPrt - existingCartItem.prt;
    const newTotalFat = state.totalFat - existingCartItem.fat;


    let updatedItems = [];
    let updatedItem;

    if (existingCartItem.amount > 1) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [
        ...state.items.slice(0, existingCartItemIndex),
        ...state.items.slice(existingCartItemIndex + 1),
      ];
    }
    return {
      items: updatedItems,
      totalCal: newTotalCal,
      totalCho: newTotalCho,
      totalFat: newTotalFat,
      totalPrt: newTotalPrt,
      dairyProduct: dairyProduct,
      meatProduct: meatProduct,
      breadProduct: breadProduct,
      vegetableProduct: vegetableProduct,
      fruitProduct: fruitProduct,
      fatProduct: fatProduct,
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
  dairyProduct: 0,
  meatProduct: 0,
  breadProduct: 0,
  vegetableProduct: 0,
  fruitProduct: 0,
  fatProduct: 0,
};


const clientReducer = (state, action) => {

  if(action.type === 'ADD') {

    const updatedClient = {...state,
      firstname: action.client.firstname,
      lastname: action.client.lastname,
      age: action.client.age,
      height: action.client.height,
      weight: action.client.weight,
      pal: action.client.pal,
      gender: action.client.gender,
      BMR: action.client.bmr,
      TEE: action.client.tee,
      BMI: action.client.bmi
        }
     

    return updatedClient;

  }


return defaultUser
}

const defaultUser = {
  firstname: '',
  lastname: '',
  age: 0,
  height: 0,
  weight: 0,
  pal: 0,
  gender: '',
  BMR: 0,
  TEE: 0,
  BMI: 0
}

export default function CartContextProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartDefault);
  const [clientState, dispatchClient] = useReducer(clientReducer, defaultUser)

  const addClient = (client) => {
    dispatchClient({type:'ADD', client: client})
  }
  
  
  
  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
    
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalCal: cartState.totalCal,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    totalCho: cartState.totalCho,
    totalFat: cartState.totalFat,
    totalPrt: cartState.totalPrt,
    dairyProduct: cartState.dairyProduct,
    meatProduct: cartState.meatProduct,
    breadProduct: cartState.breadProduct,
    vegetableProduct: cartState.vegetableProduct,
    fruitProduct: cartState.fruitProduct,
    fatProduct: cartState.fatProduct,
    client: clientState,
    addClient: addClient
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
