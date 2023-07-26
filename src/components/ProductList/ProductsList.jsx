import "./product-list.css";
import { useProducts } from "../../contexts/ProductsContext";
import GridView from "../GridView/GridView";

export default function ProductsList() {
  const { products } = useProducts();
  return (
    <>
      <GridView products={products}/>
    </>
  );
}
