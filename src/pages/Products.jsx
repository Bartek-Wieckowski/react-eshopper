import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductsList from "../components/ProductList/ProductsList";

export default function Products() {
  return (
    <main>
      <Breadcrumbs title="Products" />
      <section className="products section-center">
        <span>Filter Component</span>
        <div>
          <span>Sort component</span>
          <ProductsList />
        </div>
      </section>
    </main>
  );
}
