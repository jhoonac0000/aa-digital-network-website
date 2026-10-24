import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <p>
        <Link href="/">Go to the homepage →</Link>
      </p>
    </div>
  );
}
