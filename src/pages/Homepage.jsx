import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";
import MainSlider from "../components/MainSlider/MainSlider";

export default function Homepage() {
  return (
    <main>
      <section className="section">
        <MainSlider />
        <Hero />
        <FeaturedProducts />
      </section>
    </main>
  );
}
