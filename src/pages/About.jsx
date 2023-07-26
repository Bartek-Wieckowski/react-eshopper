import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function About() {
  return (
    <main>
      <Breadcrumbs title="About" />
      <section className="page section section-center">
        <img src="/assets/imgs/procat3.png" alt="picture" />
        <article>
          <div className="title">
            <h2>About Us</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed
            dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi
            blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi,
            eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </section>
    </main>
  );
}
