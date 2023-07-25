import { Link } from "react-router-dom";
import "./breadcrumbs.css";

export default function Breadcrumbs({ title, product }) {
  return (
    <main>
      <section className="  breadcrumb-wrapper">
        <div className="section-center">
          <h3>
            <Link to="/">Home</Link>
            {product && <Link to="/products">/ Products</Link>}/ {title}
          </h3>
        </div>
      </section>
    </main>
  );
}
