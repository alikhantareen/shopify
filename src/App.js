import React from 'react'
import './App.css';
import ItemScreen from './components/ItemScreen'
import HomeScreen from "./components/HomeScreen";
import CartScreen from "./components/CartScreen";
import Checkout from "./components/Checkout";
import {Switch, Route} from 'react-router-dom'
import CartItems from "./components/CartItems";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact={true}>
              <HomeScreen />
            </Route>
            <Route path="/items/:id" exact={true}>
              <ItemScreen />
            </Route>
            <Route path="/items/:id/cart">
              <CartScreen />
            </Route>
          <Route path="/checkout">
              <Checkout />
          </Route>
          <Route to="/mycart">
            <CartItems />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
