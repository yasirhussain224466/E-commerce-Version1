import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, productDetailReducer } from "./Reducers/ProductReducer";
import {userReducer} from './Reducers/UserReducer'


const reducer = combineReducers({
    products: productReducer,
    user: userReducer,
    productDetail: productDetailReducer,
});

let initialState = {};

const middleware = [thunk];
const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
