import "./App.css";
import HeaderProfile from "./components/HeaderProfile";
import ProductList from "./components/ProductList";
import data from "./data";

function App() {
  return (
    <div className="App">
      <HeaderProfile/>
      <ProductList products={data} />
    </div>
  );
}

export default App;
