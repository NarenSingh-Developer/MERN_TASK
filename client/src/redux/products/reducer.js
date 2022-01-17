let products = []

const productReducer = (state = products, action) =>{
    if(action.type === "GET_ALL_PRODUCTS"){
        return state = action.payload;
    }
    if(action.type === "GET_PRODUCT_ID"){
        return state = [action.payload];
    }
    return state;
}

export default productReducer;