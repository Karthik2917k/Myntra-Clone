import {combineReducers,applyMiddleware,compose,legacy_createStore} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cart.reducer";
import { mensReducer } from "./mens/mens.reducer";
import { singleReducer } from "./singleProduct/prod.reducer";
import { userReducer } from "./user/user.reducer";
const rootReducer = combineReducers({
    mens:mensReducer,
    prod:singleReducer,
    user:userReducer,
   cart:cartReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));