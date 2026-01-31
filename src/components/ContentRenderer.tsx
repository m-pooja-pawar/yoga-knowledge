'use client';

import { ContentSection } from '@/lib/prenatal-types';
import ImageLightbox from './ImageLightbox';

interface ContentRendererProps {
  sections: ContentSection[];
}

// Helper function to parse cell content into list items
function parseToList(text: string): string[] {
  // Split by common delimiters: periods followed by space and capital, commas, or explicit list markers
  const items = text
    .split(/(?:\.\s+(?=[A-Z]))|(?:,\s*(?=[A-Z]))|(?:\n)/)
    .map(item => item.trim())
    .filter(item => item.length > 0);

  return items;
}

// Check if content should be displayed as a list (has multiple distinct items)
function shouldBeList(text: string): boolean {
  const items = parseToList(text);
  return items.length > 1 && text.length > 50;
}

export default function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <div className="space-y-6">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'heading':
            return (
              <h2 key={index} className="text-2xl font-serif text-gray-900 mt-10 mb-4 pt-6 border-t border-sage-100 first:border-t-0 first:pt-0 first:mt-0">
                {section.content}
              </h2>
            );

          case 'subheading':
            return (
              <h3 key={index} className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {section.content}
              </h3>
            );

          case 'paragraph':
            return (
              <p key={index} className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            );

          case 'list':
            return (
              <ul key={index} className="space-y-2 text-gray-600">
                {section.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sage-500 mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'image':
            return (
              <div key={index} className="my-4">
                <ImageLightbox
                  src={section.src || ''}
                  alt={section.alt || ''}
                  caption={section.caption}
                />
              </div>
            );

          case 'table':
            // Check if this is a Benefits/Contraindications table
            const isBenefitsTable = section.headers?.includes('Benefits') && section.headers?.includes('Contraindications');

            if (isBenefitsTable && section.rows && section.rows.length > 0) {
              // Render as structured cards instead of table
              return (
                <div key={index} className="space-y-4 my-6">
                  {section.rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="bg-sage-50/50 rounded-lg p-5 space-y-4">
                      {/* Benefits */}
                      {row[0] && (
                        <div>
                          <h4 className="text-sm font-semibold text-sage-700 uppercase tracking-wide mb-2">
                            Benefits
                          </h4>
                          {shouldBeList(row[0]) ? (
                            <ul className="space-y-1.5 text-gray-600 text-sm">
                              {parseToList(row[0]).map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-sage-400 mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600 text-sm">{row[0]}</p>
                          )}
                        </div>
                      )}

                      {/* Contraindications */}
                      {row[1] && (
                        <div>
                          <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">
                            Contraindications
                          </h4>
                          {shouldBeList(row[1]) ? (
                            <ul className="space-y-1.5 text-gray-600 text-sm">
                              {parseToList(row[1]).map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-red-300 mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600 text-sm">{row[1]}</p>
                          )}
                        </div>
                      )}

                      {/* Trimester */}
                      {row[2] && (
                        <div>
                          <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                            Trimester
                          </h4>
                          <p className="text-gray-600 text-sm">{row[2]}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            }

            // Regular table rendering
            return (
              <div key={index} className="overflow-x-auto my-6">
                <table className="min-w-full border border-sage-200 rounded-lg overflow-hidden text-sm">
                  {section.headers && (
                    <thead className="bg-sage-50">
                      <tr>
                        {section.headers.map((header, i) => (
                          <th key={i} className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-sage-200">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {section.rows?.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-sage-50/30'}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-gray-600 border-b border-sage-100 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'note':
            return (
              <div key={index} className="bg-sage-50 border-l-4 border-sage-500 p-4 my-4 rounded-r-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-sage-700">Note:</strong> {section.content}
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
