import Product from "../Product/Product";
import "./grid-view.css";

export default function GridView({ products }) {
  return (
    <>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
