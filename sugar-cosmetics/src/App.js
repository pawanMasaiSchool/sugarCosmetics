import AllRoutes from "./AllRoutes/AllRoutes";
import  { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from './Redux/Products/actions';
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import "./styles.css";
<<<<<<< HEAD
import TemporaryDrawer from "./Components/Header/myDrawer";
=======
import { addToCart } from "./Redux/Cart/actions";
import AdminCreateProduct from "./Pages/AdminCreateProduct";
import AdminShowOrders from "./Pages/AdminShowOrders";
import AdminLogin from "./Pages/AdminLogin";
import AdminNavbar from "./Components/AdminNavbar";
>>>>>>> ea42834c0fd74eb4d0bf11fb224d185f1fa09f00


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
<<<<<<< HEAD
=======
      {/* <AdminProduct /> */}
>>>>>>> ea42834c0fd74eb4d0bf11fb224d185f1fa09f00
    </div>
  );
}