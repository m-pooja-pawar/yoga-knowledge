import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-sage-50 min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-sage-100 rounded-full flex items-center justify-center">
            <span className="text-4xl font-serif text-sage-600">?</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Page Not Found
          </h1>

          <p className="text-gray-600 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
