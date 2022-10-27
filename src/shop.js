import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./style.css"

function Shop() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])


    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')
        const items = await data.json()
        setItems(items)
    }
    return (
        <div>
            <Link to='/shop/gcnh}'><h1>khalid</h1></Link>
            <Link to='/shop/jcxvc}'><h1>amine</h1></Link>
            <Link to='/shop/xgaery}'><h1>salim</h1></Link>
        </div>
    );
}

// <link  to={`/shop/${item.itmeID}}`>{item.name} </Link>

export default Shop;
