import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useCartStore} from "../store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemScreen.css'
import Header from "./header";

const ItemScreen = () => {
  const {id} = useParams()
  const [select, setSelect] = useState(1)
  const [data, setData] = useState(null)
  const [loading, setloading] = useState(true)
  const addCart = useCartStore(state => state.addToCart)
  function apiCall(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json => {
        setData(json)
        setloading(false)
      })
  }

  function selectValue(){
    var e = document.getElementById("select")
    var value = e.options[e.selectedIndex].value;
    setSelect(value)
  }

  useEffect(() => {
    apiCall(id)
  }, [])
  return(
    <div>
      <Header />
      <div className="main">
        <div className="main-container">
          {
            loading ? <div className="loader-container"><div className="loader"></div></div> :
              <div className="item">
                <img className="img" src={data.image} alt="items"/>
                <div>
                  <h3>{data.title}</h3>
                  <p><b>{data.category}</b></p>
                  <p>{data.description}</p>
                  <p>Price: <b>${data.price}</b></p>
                  <p>Rating: <b>{data.rating.rate}/5</b></p>
                </div>
              </div>
          }
        </div>
        <div className="description">
          <div className="select">
            <label htmlFor="quantity">Quantity:</label>
            <select id="select" name="quantity" className="select" onChange={selectValue}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="pricing">
            <p>Total price : $<b>{data ? select * data.price : 0}</b></p>
          </div>
          <Link id="link" to={`/items/${id}/cart`}>
            <button className="btn btn-warning" onClick={() => addCart({id: data.id, title: data.title, img: data.image, price: data.price, quantity: select})}
            >Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ItemScreen