import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import {Link} from "react-router-dom";
import {useCartStore} from "../store";


const Header = () => {
    return (
        <div className="header">
            <div className="brand">
                <Link id="link" to="/">
                  <span id="brand">Shopify.com</span>
                </Link>
            </div>
            <div className="cart">
              <Link id="link" to="/mycart"><span id="cartlength"> My Cart : {useCartStore(state => state.cart.length)}</span></Link>
            </div>
        </div>
    )
}

export default Header