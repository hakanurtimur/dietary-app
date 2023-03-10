
import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Alterations from './components/Alterations/Alterations';

import Header from './components/Layout/Header/Header';

function App() {
  return (
    <React.Fragment>
    <Cart></Cart>
    <Header></Header>
    <main>
      <Alterations></Alterations>
    </main>
    

    </React.Fragment>
  );
}

export default App;
