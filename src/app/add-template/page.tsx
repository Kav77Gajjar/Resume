'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';

export default function AddTemplatePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [templateCode, setTemplateCode] = useState('');
  const [fileName, setFileName] = useState('');
  const [templateDescription, setTemplateDescription] = useState('');
  const [templateTags, setTemplateTags] = useState('');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    setIsLoading(false);
    if (!loginStatus) {
      router.push('/auth?returnTo=/add-template');
    }
  }, [router]);

  const handleSaveTemplate = async () => {
    if (!fileName.trim() || !templateCode.trim()) {
      alert('Please fill in both template name and code');
      return;
    }

    setSaving(true);
    try {
      // Simulate API call to save template
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would send data to your backend
      const templateData = {
        name: fileName,
        description: templateDescription,
        code: templateCode,
        tags: templateTags.split(',').map(tag => tag.trim()).filter(tag => tag),
        author: localStorage.getItem('username') || localStorage.getItem('userEmail'),
        authorEmail: localStorage.getItem('userEmail'),
        createdAt: new Date().toISOString()
      };
      
      console.log('Template saved:', templateData);
      setSuccess(true);
      
      // Reset form
      setTimeout(() => {
        setFileName('');
        setTemplateDescription('');
        setTemplateCode('');
        setTemplateTags('');
        setSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error saving template:', error);
      alert('Error saving template. Please try again.');
    } finally {
      setSaving(false);
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex items-center justify-center pt-24 pb-12 flex-1">
        {success && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            ✅ Template saved successfully!
          </div>
        )}
        <div className="w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-lg flex overflow-hidden">
          {/* Left: 70% - Form */}
          <div className="w-[70%] p-10 flex flex-col justify-between border-r border-gray-200">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Add New Template</h2>
              
              <label className="block mb-2 text-gray-700 font-medium">Template Name</label>
              <input
                type="text"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter template name (e.g., Modern Professional Resume)"
                value={fileName}
                onChange={e => setFileName(e.target.value)}
              />
              
              <label className="block mb-2 text-gray-700 font-medium">Description</label>
              <textarea
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20"
                placeholder="Brief description of your template..."
                value={templateDescription}
                onChange={e => setTemplateDescription(e.target.value)}
              />
              
              <label className="block mb-2 text-gray-700 font-medium">Tags (comma separated)</label>
              <input
                type="text"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="modern, professional, creative, minimal"
                value={templateTags}
                onChange={e => setTemplateTags(e.target.value)}
              />
              
              <label className="block mb-2 text-gray-700 font-medium">Template Code (HTML/CSS)</label>
              <textarea
                className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
                placeholder="Paste your template code here..."
                value={templateCode}
                onChange={e => setTemplateCode(e.target.value)}
              />
            </div>
            <button 
              onClick={handleSaveTemplate}
              disabled={saving}
              className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving Template...
                </span>
              ) : 'Save Template'}
            </button>
          </div>
          {/* Right: 30% - Preview */}
          <div className="w-[30%] p-4 bg-gray-50 flex flex-col h-full">
            {/* Top 5% for label */}
            <div className="h-[5%] flex items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Live Preview</h3>
            </div>
            {/* Remaining 95% for preview content */}
            <div className="h-[95%] w-full bg-white border border-gray-200 rounded-lg p-4 overflow-auto">
              {templateCode ? (
                <div>
                  <div className="text-xs text-gray-500 mb-2">Preview:</div>
                  <div 
                    className="border rounded p-2 mb-4 bg-gray-50 max-h-32 overflow-auto"
                    dangerouslySetInnerHTML={{ __html: templateCode }}
                  />
                  <div className="text-xs text-gray-500 mb-2">Code:</div>
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap break-words bg-gray-100 p-2 rounded">{templateCode}</pre>
                </div>
              ) : (
                <div className="text-gray-400 text-center mt-16">
                  <svg className="mx-auto h-12 w-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p>Nothing to preview yet.</p>
                  <p className="text-xs mt-2">Start typing your template code to see the preview</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
