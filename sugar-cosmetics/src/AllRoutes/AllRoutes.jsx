import { Route,Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import MakeupPage from "../pages/makeupPage";
import { Home } from "@mui/icons-material";
import { ProductDetails } from "../pages/productPage";
import HomePage from "../pages/landingPage";
import Cart from "../pages/Cart";
import AdminProduct from "../pages/Admin/AdminProduct";
import Cart from "../Pages/Cart"
import Checkout from "../Pages/Checkout"
import Payments from "../Pages/Payments"
<<<<<<< HEAD
import MakeupPage from "../Pages/makeupPage";
import HomePage from "../Pages/landingPage";

=======
import AdminLogin from "../Pages/AdminLogin";
import AdminShowOrders from "../Pages/AdminShowOrders";
import AdminCreateProduct from "../Pages/AdminCreateProduct";
import AdminNavbar from "../Components/AdminNavbar";
>>>>>>> ea42834c0fd74eb4d0bf11fb224d185f1fa09f00
function AllRoutes(){
    return (
        <Switch>
            <Route exact path="/">
                <Box sx={{position:"relative", top:"100px"}}>
                    <HomePage />
                </Box>
            </Route>
<<<<<<< HEAD

            <Route exact path="/makeup">
                <MakeupPage />
=======
            <Route exact path="/makeup">
            <MakeupPage />
>>>>>>> ea42834c0fd74eb4d0bf11fb224d185f1fa09f00
            </Route>

            <Route exact path="/brushes">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Brushes</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/skincare">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Skincare</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/trending">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Trending</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/blog">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Blog</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/offers">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Offers</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/2021highlights">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>2021 Hightlights</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
            <Route exact path="/payments">
                <Payments />
            </Route>
            <Route exact path="/admin">
                <AdminNavbar />
                <AdminLogin />
            </Route>
            <Route exact path="/admin/orders">
                <AdminNavbar />
                <AdminShowOrders />
            </Route>
            <Route exact path="/admin/create">
                <AdminNavbar />
                <AdminCreateProduct />
            </Route>
            <Route exact path="/admin/delete">
                <AdminNavbar />
                <h1>Delete Product</h1>
            </Route>
            <Route>
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Page not found</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            
        </Switch>
    )
}

export default AllRoutes