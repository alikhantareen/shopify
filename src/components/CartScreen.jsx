import React, {useEffect, useState}  from "react";
import {Link, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartScreen.css'
import Header from "./header";
import {useCartStore} from "../store";

const CartScreen = () => {
  const {id} = useParams()
  const [data, setData] = useState(null)
  const [loading, setloading] = useState(true)
  const details = useCartStore(state => state.cart)
  function apiCall(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json => {
        setData(json)
        setloading(false)
      })
  }
  useEffect(() => {
    apiCall(id)
  }, [])
  return(
    <div>
      <Header/>
      <div className="main">
        <div className="main-container">
          {
            loading ? <div className="loader-container"><div className="loader"></div></div> :
              <div className="item">
                <img className="cartimg" src={data.image} alt="items"/>
                <div className="item-details">
                  <h4>{data.title}</h4>
                  <p>Price : $<b>{data.price}</b></p>
                  <div className="buttons">
                    <Link to="/checkout">
                      <button className="btn btn-warning">Proceed to checkout</button>
                    </Link>
                    <Link to="/">
                      <button className="btn btn-warning">Continue shopping</button>
                    </Link>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default CartScreen