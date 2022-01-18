import { Route,Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import MakeupPage from "../pages/makeupPage";
import { Home } from "@mui/icons-material";
import { ProductDetails } from "../pages/productPage";
import HomePage from "../pages/landingPage";
import Cart from "../pages/Cart";
import AdminProduct from "../pages/Admin/AdminProduct";
function AllRoutes(){
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/makeup"><MakeupPage />
            </Route>
            <Route exact path="/brushes">
                <Box sx={{position:"relative", top:"100px"}}><h1>Brushes</h1></Box>
            </Route>
            <Route exact path="/skincare">
                <Box sx={{position:"relative", top:"100px"}}><h1>Skincare</h1></Box>
            </Route>
            <Route exact path="/trending">
                <Box sx={{position:"relative", top:"100px"}}><h1>Trending</h1></Box>
            </Route>
            <Route exact path="/blog">
                <Box sx={{position:"relative", top:"100px"}}><h1>Blog</h1></Box>
            </Route>
            <Route exact path="/offers">
                <Box sx={{position:"relative", top:"100px"}}><h1>Offers</h1></Box>
            </Route>
            <Route exact path="/2021highlights">
                <Box sx={{position:"relative", top:"100px"}}><h1>2021 Hightlights</h1></Box>
            </Route>
            <Route exact path="/products/:url">
            <ProductDetails />
            </Route>
            <Route>
                <Box sx={{position:"relative", top:"100px"}}><h1>Page not found</h1></Box>
            </Route>
          
        </Switch>
    )
}

export default AllRoutes