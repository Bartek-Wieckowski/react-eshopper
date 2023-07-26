import { Link } from "react-router-dom";
import "./breadcrumbs.css";

export default function Breadcrumbs({ title, product }) {
  return (
    <div className="breadcrumb-wrapper">
      <section className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </section>
    </div>
  );
}
