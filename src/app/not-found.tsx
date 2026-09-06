import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="notFound">
      <div className="container narrowContainer">
        <p className="eyebrow">404</p>
        <h1>That page doesn&apos;t exist.</h1>
        <p>The link may be outdated or the page may have moved.</p>
        <Link className="button primaryButton" href="/">Return home</Link>
      </div>
    </main>
  );
}
