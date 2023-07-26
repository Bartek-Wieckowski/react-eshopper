import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductsList from "../components/ProductList/ProductsList";

export default function Products() {
  return (
    <div>
      <Breadcrumbs title="Products" />
      <ProductsList />
    </div>
  );
}
