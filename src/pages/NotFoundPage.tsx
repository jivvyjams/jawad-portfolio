import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">404 — Page Not Found</h2>
      <p className="mt-3 text-lg">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-2xl border-2 border-alt px-4 py-2 font-semibold text-fg transition hover:bg-accent hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        Back to home
      </Link>
    </section>
  );
}

export default NotFoundPage;
