import { Footer } from "./Components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          background: "black",
          display: "flex",
          gap: "25px",
          justifyContent: "center"
        }}
      ></div>
      <Footer />
    </div>
  );
}
