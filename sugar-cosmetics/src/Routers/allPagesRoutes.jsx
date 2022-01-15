import { Route, Switch } from "react-router-dom";
import Home from "../pages/landingPage";
import { ProductDetails } from "../pages/productPage";

export function AllRoutes(){
return <>
<Switch>
    <Route exact path="/"><Home /></Route>
<Route exact path="/products/:url">
    <ProductDetails />
</Route>
</Switch>
</>
}