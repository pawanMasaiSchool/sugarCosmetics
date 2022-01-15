import AllRoutes from "./AllRoutes/AllRoutes";
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from './Redux/Products/actions';
// import Cart from './Pages/Cart';
// import { addToCart } from './Redux/Cart/actions';
// import Checkout from './Pages/Checkout';
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
// import { Navbar } from "./Components/Header/Navbar";
import "./styles.css";

export default function App() {
  // const products = useSelector(state => state.products.products)
  
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getProduct())
  }, [])
  
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}
