import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="page-not-found">
      <section className="page-100">
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </main>
  );
}
