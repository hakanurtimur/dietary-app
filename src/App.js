import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Alterations from "./components/Alterations/Alterations";
import Header from "./components/Layout/Header/Header";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [modal, setModal] = useState(false);

  const openModalHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <CartContextProvider>
      {modal && <Cart onClick={closeModalHandler}></Cart>}
      <Header onModal={openModalHandler}></Header>
      <main>
        <Alterations></Alterations>
      </main>
    </CartContextProvider>
  );
}

export default App;
