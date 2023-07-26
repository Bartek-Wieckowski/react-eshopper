import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductsList from "../components/ProductList/ProductsList";

export default function Products() {
  return (
    <div>
      <Breadcrumbs title="Products" />
      <div className="products">
        <span>Filter Component</span>
        <div>
            <span>Sort component</span>
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
