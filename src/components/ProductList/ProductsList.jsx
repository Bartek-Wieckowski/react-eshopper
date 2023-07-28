import "./product-list.css";
// import { useProducts } from "../../contexts/ProductsContext";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { useFilter } from "../../contexts/FilterContext";

export default function ProductsList() {
  const { filteredProducts: products, gridView } = useFilter();

  if(products.length < 1) return <h5 style={{textTransform: "none"}}>Sorry, no products matched your search</h5>

  return gridView === false ? <ListView products={products} /> : <GridView products={products} />;
}
