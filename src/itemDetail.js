import React, { useState, useEffect } from "react";
import "./style.css"

function Item(match) {
console.log(match)
    const [item, setItem] = useState({})
    // const fetchItem =()=>{
    //     const data = await fetch(`/........./get?ids=${match.params.id}`)
    //     const item = await fetchItem.json()
    // setItem(item)
    // }
    return (
        <div>
          <h1>Item</h1>
          {/* <h1>{item.name}</h1>
          <img src={item.img}/>
           */}

        </div>
    );
}

// <link  to={`/shop/${item.itmeID}}`>{item.name} </Link>

export default Item;
