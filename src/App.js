import React from 'react';
import './App.css';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <div className="App">
      <ProductContainer />
      {/* <CartContainer /> */}
    </div>
  );
}

export default App;
