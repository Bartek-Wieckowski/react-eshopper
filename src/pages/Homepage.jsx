import { Suspense } from "react";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";
import MainSlider from "../components/MainSlider/MainSlider";
import Loading from "../components/Loading/Loading";


export default function Homepage() {
  return (
    <main>
      <section className="section">
        <MainSlider />
        <Hero />
        <Suspense fallback={<Loading />}>
          <FeaturedProducts />
        </Suspense>
      </section>
    </main>
  );
}
