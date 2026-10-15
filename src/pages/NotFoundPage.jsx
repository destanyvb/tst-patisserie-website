import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="pt-16 md:pt-20 min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-gold mb-4">404</p>
        <h1 className="font-display text-2xl font-semibold text-espresso mb-3">
          Page not found
        </h1>
        <p className="font-body text-sm text-muted mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-7 py-3 bg-espresso text-cream font-body text-sm font-semibold rounded-full hover:bg-espresso/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
