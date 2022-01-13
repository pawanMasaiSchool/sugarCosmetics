import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import cartReducer from './Cart/reducer';
import loginReducer from './Login/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './AppData/reducer';


const rootReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
  appData:appReducer
})

const composed = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composed);
