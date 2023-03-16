import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Alterations from "./components/Alterations/Alterations";
import Header from "./components/Layout/Header/Header";
import CartContextProvider from "./store/CartContextProvider";
import ClientInfo from "./components/ClientInfo/ClientInfo";
import AlterationsSummary from "./components/Alterations/AlterationsSummary";
import LoadBars from "./components/LoadBars/LoadBars";

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
      <AlterationsSummary></AlterationsSummary>
      <main>
        <ClientInfo></ClientInfo>
        <Alterations></Alterations>
        <LoadBars></LoadBars>
      </main>
    </CartContextProvider>
    
  );
}

export default App;
