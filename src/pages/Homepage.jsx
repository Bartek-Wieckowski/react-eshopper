import Hero from "../components/Hero/Hero";
import MainSlider from "../components/MainSlider/MainSlider";

export default function Homepage() {
  return (
    <main>
      <section className="section-center">
        <MainSlider />
        <Hero />
      </section>
    </main>
  );
}
