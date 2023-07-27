import "./product-list.css";
// import { useProducts } from "../../contexts/ProductsContext";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { useFilter } from "../../contexts/FilterContext";

export default function ProductsList() {
  const { products, gridView } = useFilter();

  return gridView === false ? <ListView products={products} /> : <GridView products={products} />;
}
