import { Link } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  return (
    <section className="section-center hero-section">
      <article className="hero-content">
        <h2>
          design your <br />
          comfort zone
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
          possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora
          excepturi quis alias?
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src="/assets/imgs/banner1.jpg" alt="picture1" className="accent-img" />
        <img src="/assets/imgs/procat2.jpg" alt="picture2" className="main-img" />
      </article>
    </section>
  );
}
