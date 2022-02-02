import { useSelector } from "react-redux";
import Product from "../Product";
import "./styles.css";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <div className="allProducts">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
