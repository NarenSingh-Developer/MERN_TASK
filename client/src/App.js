import React from "react";
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from './components/Home';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/add" element={<AddProduct/>}/>
    </Routes>
    </>
  );
}

export default App;
