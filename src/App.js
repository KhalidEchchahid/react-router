import React from "react";
import About from "./about";
import Shop from "./shop";
import Nav from "./nav"
import Item from "./itemDetail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style.css"



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Item />}/>
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return <div><h1>Home</h1></div>
}

export default App;
