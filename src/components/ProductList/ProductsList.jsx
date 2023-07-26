import "./product-list.css";
import { useProducts } from "../../contexts/ProductsContext";

export default function ProductsList() {
  const { products } = useProducts();
  return (
    <div>
      <div>ProductsList</div>
      {products.map((item) => (
        <p>{item.id}</p>
      ))}
    </div>
  );
}
