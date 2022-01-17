import {combineReducers} from "redux";
import productReducer from "./products/reducer";
import categoriesReducer from "./categories/reducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productReducer,
})

export default rootReducer