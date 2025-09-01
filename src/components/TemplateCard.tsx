'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Template {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Template Preview */}
      <div className="relative h-64 bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 text-sm">
            {template.name} Preview
          </div>
        </div>
        {template.featured && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            aria-label="Preview template"
          >
            <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Template Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {template.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{template.description}</p>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Use Template
          </button>
          <Link href={`/template/${template.id}`}>
            <button 
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Preview template"
            >
              <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
