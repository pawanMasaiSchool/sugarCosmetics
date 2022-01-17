import AllRoutes from "./AllRoutes/AllRoutes";
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from './Redux/Products/actions';
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import "./styles.css";
import { addToCart } from "./Redux/Cart/actions";


export default function App() {
  
  const dispatch = useDispatch();  

  const products = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProduct())
  }, [])
  
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
     
    </div>
  );
}
