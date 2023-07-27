import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductsList from "../components/ProductList/ProductsList";
import Sort from "../components/Sort/Sort";

export default function Products() {
  return (
    <main>
      <Breadcrumbs title="Products" />
      <section className="products section-center">
        <span>Filter Component</span>
        <div>
          <Sort/>
          <ProductsList />
        </div>
      </section>
    </main>
  );
}
