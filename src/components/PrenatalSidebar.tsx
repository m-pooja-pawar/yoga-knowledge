'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { prenatalTopics } from '@/lib/prenatalTopics';

export default function PrenatalSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentTopicId = pathname.split('/').pop();

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-sage-100 flex items-center justify-between px-4 h-14">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 p-2 -ml-2 rounded-lg hover:bg-sage-50 transition-colors"
          aria-label="Toggle topic menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <span className="font-serif text-base text-gray-900">Prenatal Yoga</span>
        <Link
          href="/"
          className="text-gray-700 p-2 -mr-2 rounded-lg hover:bg-sage-50 transition-colors"
          aria-label="Home"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
            />
          </svg>
        </Link>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed top-14 left-0 right-0 bottom-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-14 lg:top-0 left-0 h-[calc(100vh-3.5rem)] lg:h-screen w-80 bg-white border-r border-sage-100
          overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-sage-100 bg-sage-50">
          <Link href="/prenatal-yoga" className="block">
            <h2 className="font-serif text-xl text-gray-900">
              Prenatal Yoga
            </h2>
            <p className="text-gray-500 text-base mt-1">
              Complete Guide
            </p>
          </Link>
          <Link
            href="/"
            className="text-gray-500 text-base mt-3 inline-block hover:text-sage-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Topic List */}
        <nav className="p-4" aria-label="Topic navigation">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-3 px-2">
            Topics
          </p>
          <ul className="space-y-1">
            {prenatalTopics.map((topic) => {
              const isActive = currentTopicId === topic.id;
              return (
                <li key={topic.id}>
                  <Link
                    href={`/prenatal-yoga/${topic.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-sage-50 flex items-start gap-3 ${
                      isActive ? 'bg-sage-100 text-gray-900 font-medium' : ''
                    }`}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 text-sage-600 text-sm flex items-center justify-center font-medium">
                      {topic.order}
                    </span>
                    <span className="text-gray-700 text-base leading-tight">
                      {topic.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
