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
      router.push('/auth/login');
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Template 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
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
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Professional</h3>
              <p className="mt-2 text-gray-600">Clean and minimal design for a professional look.</p>
              <button 
                onClick={handleTemplateSelect}
                className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Use This Template
              </button>
            </div>
          </div>
          
          {/* Template 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
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
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Modern</h3>
              <p className="mt-2 text-gray-600">Contemporary design with a clean layout and unique details.</p>
              <button 
                onClick={handleTemplateSelect}
                className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Use This Template
              </button>
            </div>
          </div>
          
          {/* Template 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
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
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Creative</h3>
              <p className="mt-2 text-gray-600">Stand out with this creative design for innovative professionals.</p>
              <button 
                onClick={handleTemplateSelect}
                className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Use This Template
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA for logged out users */}
        {!isLoggedIn && (
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900">Save and manage your resumes</h2>
            <p className="mt-2 text-gray-600">Sign in to save your progress, download, and manage multiple versions of your resume.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link
                href="/auth/login"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
