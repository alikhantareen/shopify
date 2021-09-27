import React from "react";
import {useCartStore} from "../store";
import Header from "./header";
import './CartItems.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItems = () => {
  const cartArray = useCartStore(state => state.cart)
  const removeItem = useCartStore(state => state.removeItem)
  return(
    <div>
      <Header />
      <div className="maincartitemcontainer">
        <div>
          {
            cartArray.map(item => {
              return(
                <div className="cartitembox">
                    <img id="cartimage" src={item.img} />
                  <div className="cartdetail">
                    <p><b>Title:</b> {item.title}</p>
                    <p><b>Quantity:</b> {item.quantity}</p>
                    <p><b>Total price: </b>${item.quantity * item.price}</p>
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CartItems