'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageLightbox({ src, alt, caption }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <figure className="my-4">
        <div
          className="relative w-40 h-32 cursor-pointer rounded-lg overflow-hidden border border-sage-200 hover:border-sage-400 hover:shadow-md transition-all duration-200 group bg-gray-50"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-1 group-hover:scale-105 transition-transform duration-200"
            sizes="160px"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </span>
          </div>
        </div>
        {caption && (
          <figcaption className="text-gray-500 text-xs mt-1">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Full size image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Caption */}
          {caption && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm bg-black/50 inline-block px-4 py-2 rounded-lg">
                {caption}
              </p>
            </div>
          )}

          {/* Click anywhere to close hint */}
          <p className="absolute bottom-4 right-4 text-white/60 text-xs">
            Click anywhere to close
          </p>
        </div>
      )}
    </>
  );
}
