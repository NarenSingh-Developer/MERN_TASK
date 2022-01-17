export const getAllProducts = (payload) =>{
    return {
        type: "GET_ALL_PRODUCTS",
        payload: payload
    }
}

export const getProductById = (payload) => {
    return {
        type: "GET_PRODUCT_ID",
        payload: payload
    }
}

