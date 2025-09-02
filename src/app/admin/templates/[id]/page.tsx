'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';

interface TemplateData {
  id: number;
  name: string;
  description: string;
  category: string;
  code: string;
  featured: boolean;
  tags: string;
}

export default function TemplatePreviewPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [template, setTemplate] = useState<TemplateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the template data from your API
    // For now, we'll use mock data
  const mockTemplate: TemplateData = {
      id: parseInt(params.id),
      name: "Modern Professional",
      description: "Clean and contemporary design perfect for business professionals",
      category: "Professional",
      featured: true,
      tags: "modern, clean, professional",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume - John Doe</title>
  <style>
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
}

.resume-container {
  background: white;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  border-radius: 8px;
}

.resume-header {
  text-align: center;
  border-bottom: 3px solid #007bff;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.resume-header h1 {
  font-size: 2.5em;
  margin: 0;
  color: #007bff;
}

.resume-header h2 {
  font-size: 1.5em;
  margin: 10px 0;
  color: #666;
  font-weight: normal;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.contact-info p {
  margin: 0;
  font-size: 0.9em;
  color: #666;
}

.resume-section {
  margin-bottom: 30px;
}

.resume-section h3 {
  font-size: 1.3em;
  color: #007bff;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.job, .education {
  margin-bottom: 20px;
}

.job h4, .education h4 {
  font-size: 1.1em;
  margin: 0 0 5px 0;
  color: #333;
}

.company, .school {
  font-weight: bold;
  color: #007bff;
  margin: 0;
}

.duration {
  font-style: italic;
  color: #666;
  margin: 0 0 10px 0;
  font-size: 0.9em;
}

.job ul {
  margin: 10px 0 0 20px;
  padding: 0;
}

.job li {
  margin-bottom: 5px;
  color: #555;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill {
  background: #007bff;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

@media (max-width: 600px) {
  .resume-container {
    padding: 20px;
  }
    
  .contact-info {
    flex-direction: column;
    gap: 5px;
  }
    
  .resume-header h1 {
    font-size: 2em;
  }
}
</style>
</head>
<body>
  <div class="resume-container">
    <header class="resume-header">
      <h1>John Doe</h1>
      <h2>Software Engineer</h2>
      <div class="contact-info">
        <p>Email: john.doe@email.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Location: New York, NY</p>
      </div>
    </header>
        
    <section class="resume-section">
      <h3>Experience</h3>
      <div class="job">
        <h4>Senior Software Engineer</h4>
        <p class="company">Tech Company Inc.</p>
        <p class="duration">2020 - Present</p>
        <ul>
          <li>Led development of web applications using React and Node.js</li>
          <li>Improved application performance by 40%</li>
          <li>Mentored junior developers</li>
        </ul>
      </div>
    </section>
        
    <section class="resume-section">
      <h3>Education</h3>
      <div class="education">
        <h4>Bachelor of Science in Computer Science</h4>
        <p class="school">University of Technology</p>
        <p class="duration">2016 - 2020</p>
      </div>
    </section>
        
    <section class="resume-section">
      <h3>Skills</h3>
      <div class="skills">
        <span class="skill">JavaScript</span>
        <span class="skill">React</span>
        <span class="skill">Node.js</span>
        <span class="skill">Python</span>
      </div>
    </section>
  </div>
</body>
</html>`
    };

    setTemplate(mockTemplate);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  if (!template) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">Template Not Found</h1>
          <p className="mt-2 text-gray-600">The requested template could not be found.</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Template Preview</h1>
              <p className="mt-1 text-sm text-gray-600">
                Preview of "{template.name}" template
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => router.back()}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back
              </button>
              <button className="bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Edit Template
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Template Info */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Template Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Name:</label>
                <p className="text-sm text-gray-900">{template.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Description:</label>
                <p className="text-sm text-gray-900">{template.description}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Category:</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {template.category}
                </span>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Featured:</label>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  template.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {template.featured ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Tags:</label>
                <p className="text-sm text-gray-900">{template.tags}</p>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Live Preview</h3>
            <div className="border border-gray-300 rounded-md h-96 overflow-auto">
              <iframe
                srcDoc={template.code}
                className="w-full h-full"
                title="Template Preview"
              />
            </div>
          </div>
        </div>

        {/* Code Sections */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* HTML Code */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Code</h3>
            <div className="bg-gray-100 rounded-md p-4 overflow-auto max-h-96">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                <code>{template.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
