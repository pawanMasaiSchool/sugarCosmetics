import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from './Redux/Products/actions';
import Cart from './Pages/Cart';
import Payments from './Pages/Payments';

import { addToCart } from './Redux/Cart/actions';
import Checkout from './Pages/Checkout';
import { Footer } from "./Components/Footer/Footer";
import "./styles.css";
import AccountInfo from './Pages/AccountInfo';

export default function App() {
  const products = useSelector(state => state.products.products)
  
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getProduct())
  }, [])
  
  return (
    <div className="App" style={{backgroundColor: "#f5f5f5"}}>
        <AccountInfo />
        <Cart />
        <Payments />
        <Checkout />
        {products?.map(el => <div>{el.name}<button onClick={() => dispatch(addToCart(el))}>Add</button></div>)}
        <Footer />
      </div>
  );
}
