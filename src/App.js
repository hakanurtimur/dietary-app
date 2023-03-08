
import React from 'react';
import './App.css';
import DietProducts from './components/DietProducts/DietProducts';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <React.Fragment>
    <Header></Header>
    <DietProducts></DietProducts>

    </React.Fragment>
  );
}

export default App;
