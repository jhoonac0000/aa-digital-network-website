import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | AA Digital Network",
  description: "This page does not exist or has moved. Return to the AA Digital Network homepage.",
  robots: { index: false, follow: true },
};

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
