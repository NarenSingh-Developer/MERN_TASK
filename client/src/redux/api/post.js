import axios from "axios";

export const addProduct = async(product) =>{
    try{
        await axios.post("http://localhost:5000/product/addproduct", product);
        window.alert("Product added")
    }catch(e) {
        console.log(e);
    }
}