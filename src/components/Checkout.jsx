import React from "react";
import {useCartStore} from "../store";
import Header from "./header";

const Checkout = () => {
  const cartArray = useCartStore(state => state.cart)
  return(
    <div>
      <Header/>
      {
        cartArray.map(item => {
          return(
            <div>
              Tada!
            </div>
          )
        })
      }
    </div>
  )
}

export default Checkout