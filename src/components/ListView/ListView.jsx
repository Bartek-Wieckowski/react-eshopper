import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import "./list-view.css";

export default function ListView({ products }) {
  return (
    <div className="list-view-products-container">
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
