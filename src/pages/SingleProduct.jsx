import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import { formatPrice } from "../utils/helpers";
import Loading from "../components/Loading/Loading";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductImages from "../components/ProductImages/ProductImages";


export default function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleProductLoading, singleProductError, singleProduct, fetchSingleProduct } = useProducts();
  const { name, price, description, stock, stars, reviews, id: sku, company, images } = singleProduct;

  useEffect(function () {
    fetchSingleProduct(`https://course-api.com/react-store-single-product?id=${id}`);
  }, []);
  useEffect(
    function () {
      if (singleProductError) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    },
    [singleProductError]
  );

  if (singleProductLoading) {
    return <Loading />;
  }
  if (singleProductError) {
    return (
      <div className="section section-center text-center">
        <h2>there was an error...</h2>
      </div>
    );
  }
  return (
    <main>
      <Breadcrumbs title={name} product />
      <section className="section section-center ">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center single-product-page">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <span>Stars Component</span>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <span>AddToCart component</span>}
          </section>
        </div>
      </section>
    </main>
  );
}
