import React from 'react';
import Home from "./pages/landingPage"
import { ProductDetails } from './pages/productPage';
import { AllRoutes } from './Routers/allPagesRoutes';
function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
