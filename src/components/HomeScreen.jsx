import React, {useState, useEffect} from 'react'
import './HomeScreen.css';
import {Link} from 'react-router-dom'
import Header from "./header";

function HomeScreen() {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    function apiCall(){
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json => {
                setData(json)
                setloading(false)
            })
    }

    useEffect(() => {
        apiCall()
    }, [])

    return (
        <div className="HomeScreen">
            <Header />
            <div className="items-container">
                {
                    loading ? <div className="loader-container"><div className="loader"></div></div> : (
                        data.map((item, index) => {
                            return (
                                <Link id="link" to={`/items/${item.id}`}>
                                    <div className="item-box">
                                        <img className="item-img" src={item.image} alt="items"/>
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p><b>${item.price}</b></p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }))
                }
            </div>
        </div>
    );
}

export default HomeScreen;