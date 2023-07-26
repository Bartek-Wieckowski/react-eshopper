import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import "./featured-products.css";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  const { productsLoading, productsError, featuredProducts } = useProducts();
  const [shuffledFeatured, setShuffledFeatured] = useState([]);

  useEffect(
    function () {
      setShuffledFeatured(shuffleArray(featuredProducts));
    },
    [featuredProducts]
  );

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return (
    <section className="section featured-products-wrapper">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <section className="section-center featured">
        {shuffledFeatured.slice(0, 3).map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
      <Link to="/products" className="btn">
        All products
      </Link>
    </section>
  );
}
