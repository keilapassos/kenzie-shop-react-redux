import "./styles.css";
import Header from "./components/Header";
import Routes from "./routes";

export default function App() {
  return (
    <div className="App">
      <div className="divProductsAndCart">
        <Header />
        <Routes />
      </div>
    </div>
  );
}
