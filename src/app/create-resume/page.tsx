'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateResumePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    setIsLoading(false);
  }, []);

  const handleTemplateSelect = () => {
    if (!isLoggedIn) {
      router.push('/auth');
    } else {
      // In a real app, you would navigate to the resume editor with the selected template
      alert('Template selected! Redirecting to editor...');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Create Your Professional Resume</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our professional templates and easily customize to match your style and needs.
          </p>
        </div>
        
        {/* Template Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 overflow-visible">
          {/* Template 1 */}
          <div className="w-full flex justify-center">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group h-[570px] w-[120%]">
              {/* Template Preview - 80% */}
              <div className="h-[80%] bg-gray-100 flex items-center justify-center">
                <div className="w-3/4 h-5/6 bg-white shadow-sm border border-gray-200 p-4">
                  <div className="h-1/4">
                    <div className="h-4 w-2/3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-3/4 mt-4 flex">
                    <div className="w-1/3 pr-2">
                      <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-2/3 pl-2">
                      <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Template Label - 8% */}
              <div className="h-[8%] bg-gray-50 flex items-center px-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 text-sm truncate">Minimal Resume</h3>
                <span className="ml-2 text-xs text-gray-500">Professional</span>
              </div>
              
              {/* Buttons - 12% */}
              <div className="flex h-[12%]">
                <button 
                  onClick={handleTemplateSelect}
                  className="flex-1 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Use This Template
                </button>
                <Link href="/template/1">
                  <button 
                    className="w-16 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label="Preview template"
                  >
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          
          {/* Template 2 */}
          <div className="w-full flex justify-center">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group h-[570px] w-[120%]">
              {/* Template Preview - 80% */}
              <div className="h-[80%] bg-gray-100 flex items-center justify-center">
                <div className="w-3/4 h-5/6 bg-white shadow-sm border border-gray-200 p-4">
                  <div className="h-1/4 flex">
                    <div className="w-1/4 bg-blue-100 mr-2"></div>
                    <div className="w-3/4">
                      <div className="h-4 w-2/3 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="h-3/4 mt-4">
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Template Label - 8% */}
              <div className="h-[8%] bg-gray-50 flex items-center px-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 text-sm truncate">Modern Split</h3>
                <span className="ml-2 text-xs text-gray-500">Creative</span>
              </div>
              
              {/* Buttons - 12% */}
              <div className="flex h-[12%]">
                <button 
                  onClick={handleTemplateSelect}
                  className="flex-1 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Use This Template
                </button>
                <Link href="/template/2">
                  <button 
                    className="w-16 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Preview template"
                >
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          
          {/* Template 3 */}
          <div className="w-full flex justify-center">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group h-[570px] w-[120%]">
              {/* Template Preview - 80% */}
              <div className="h-[80%] bg-gray-100 flex items-center justify-center">
                <div className="w-3/4 h-5/6 bg-white shadow-sm border border-gray-200 p-4">
                  <div className="h-1/4 flex flex-col items-center">
                    <div className="h-8 w-8 bg-gray-300 rounded-full mb-2"></div>
                    <div className="h-3 w-1/2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-3/4 mt-4">
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Template Label - 8% */}
              <div className="h-[8%] bg-gray-50 flex items-center px-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 text-sm truncate">Centered Profile</h3>
                <span className="ml-2 text-xs text-gray-500">Elegant</span>
              </div>
              
              {/* Buttons - 12% */}
              <div className="flex h-[12%]">
                <button 
                  onClick={handleTemplateSelect}
                  className="flex-1 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Use This Template
                </button>
                <Link href="/template/3">
                  <button 
                    className="w-16 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label="Preview template"
                  >
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>
        
        {/* CTA for logged out users */}
        {!isLoggedIn && (
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900">Save and manage your resumes</h2>
            <p className="mt-2 text-gray-600">Sign in to save your progress, download, and manage multiple versions of your resume.</p>
            <div className="mt-4 flex justify-center">
              <Link
                href="/auth"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login / Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
