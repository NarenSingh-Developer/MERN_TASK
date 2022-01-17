import axios from "axios"
import {getAllProducts, getProductById} from "../products/actions";
import {getCategories} from "../categories/actions";

export const fetchCategories = () =>{
    return (dispatch) =>{
        axios.get("http://localhost:5000/categories").then((response) => {
            const categories = response.data;
            dispatch(getCategories(categories));
          })
    }
}

export const fetchProducts = () =>{
    return (dispatch) =>{
        axios.get("http://localhost:5000/product").then((response) => {
            const products = response.data;
            dispatch(getAllProducts(products));
          })
    }
}

export const fetchProductById = (id) =>{
    return (dispatch) =>{
        axios.get(`http://localhost:5000/product/${id}`).then((response) => {
            const product = response.data;
            dispatch(getProductById(product))
        })
    }
}