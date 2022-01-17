const categories = []

const categoriesReducer = (state = categories, action) => {
    if(action.type === "GET_CATEGORIES"){
        return state = action.payload;
    }

    return state;
} 

export default categoriesReducer