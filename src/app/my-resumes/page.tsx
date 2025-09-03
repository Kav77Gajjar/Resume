'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Mock resume data
const mockResumes = [
  {
    id: 1,
    title: "Software Engineer Resume",
    lastEdited: "2023-08-15",
    template: "Professional"
  },
  {
    id: 2,
    title: "Product Manager CV",
    lastEdited: "2023-09-01",
    template: "Modern"
  },
  {
    id: 3,
    title: "UX Designer Resume",
    lastEdited: "2023-09-10",
    template: "Creative"
  }
];

export default function MyResumesPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [resumes, setResumes] = useState(mockResumes);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/auth');
    } else {
      setIsLoading(false);
    }
  }, [router]);

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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Resumes</h1>
          <Link
            href="/create-resume"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create New Resume
          </Link>
        </div>
        
        {resumes.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600">You haven&apos;t created any resumes yet.</p>
            <Link
              href="/create-resume"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your First Resume
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {resumes.map((resume) => (
                <li key={resume.id}>
                  <div className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex flex-col sm:flex-row sm:items-center w-full">
                      <div className="flex-1">
                        <p className="text-lg font-medium text-blue-600 truncate">{resume.title}</p>
                        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:space-x-4">
                          <p className="flex items-center text-sm text-gray-500">
                            <span className="mr-1.5">Template:</span> {resume.template}
                          </p>
                          <p className="flex items-center text-sm text-gray-500">
                            <span className="mr-1.5">Last edited:</span> {resume.lastEdited}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 flex flex-shrink-0 sm:ml-5 space-x-2">
                        <button
                          type="button"
                          className="px-3 py-1.5 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1.5 bg-white text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                        >
                          Download
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1.5 bg-white text-red-600 border border-red-300 rounded hover:bg-red-50 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
