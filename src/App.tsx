import ProductCard from "./components/product-card";
import ProductTable from "./components/product-table";
import Products from "./components/products";
import Product from "./types/product";

function App() {
  return (
    <>
      <Products
        title="This is higher order Component this will render Product Card"
        render={(data) => <ProductCard data={data} />}
      ></Products>

      <Products title="This is HOC bu for table">
        {(data) => <ProductTable data={data as Product[]} />}
      </Products>
    </>
  );
}

export default App;
