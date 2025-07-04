import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link href="/" className="bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300">
          Go Home
        </Link>
      </div>
    </div>
  );
}