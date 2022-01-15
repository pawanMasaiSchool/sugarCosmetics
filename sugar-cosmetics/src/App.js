import AllRoutes from "./AllRoutes/AllRoutes";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Header/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
    
  );
}
