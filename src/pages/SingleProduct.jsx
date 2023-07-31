import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function SingleProduct() {
  return (
    <main>
      <Breadcrumbs title="test" />
      <section className="section section-center ">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center single-product-page">
          <span>Product Images component</span>
          <section className="content">
            <h2>aaa</h2>
            <span>Stars Component</span>
            <h5 className="price">price</h5>
            <p className="desc">desc</p>
            <p className="info">
              <span>Available : </span>
            </p>
            <p className="info">
              <span>SKU : </span>
            </p>
            <p className="info">
              <span>Brand : </span>
            </p>
            <hr />
            <span>AddToCart component</span>
          </section>
        </div>
      </section>
    </main>
  );
}
