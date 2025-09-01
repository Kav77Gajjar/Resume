import { Header } from '../../../components/Header';

const resumeTemplates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech professionals",
    image: "/templates/modern-professional.jpg",
    category: "Professional",
    featured: true,
    longDescription: "This modern professional template features a clean, contemporary design that's perfect for tech professionals, consultants, and business analysts. The layout emphasizes readability with clear sections for experience, skills, and education.",
    features: ["ATS-Friendly", "Clean Typography", "Professional Layout", "Easy to Customize"]
  },
  {
    id: 2,
    name: "Creative Designer",
    description: "Bold and artistic layout ideal for creative professionals",
    image: "/templates/creative-designer.jpg",
    category: "Creative",
    featured: true,
    longDescription: "Stand out with this bold and artistic template designed specifically for creative professionals. Features unique styling and layout that showcases your creativity while maintaining professionalism.",
    features: ["Creative Layout", "Visual Appeal", "Portfolio Section", "Color Customization"]
  },
  {
    id: 3,
    name: "Executive Classic",
    description: "Traditional and elegant format for senior executives",
    image: "/templates/executive-classic.jpg",
    category: "Executive",
    featured: false,
    longDescription: "A traditional and elegant template designed for senior executives and C-level professionals. Features a sophisticated layout that emphasizes leadership experience and achievements.",
    features: ["Executive Focus", "Traditional Style", "Achievement Highlights", "Professional Formatting"]
  },
  {
    id: 4,
    name: "Tech Minimalist",
    description: "Simple and clean design focused on technical skills",
    image: "/templates/tech-minimalist.jpg",
    category: "Tech",
    featured: true,
    longDescription: "A minimalist approach perfect for software engineers, developers, and IT professionals. The clean design puts focus on technical skills and project experience.",
    features: ["Minimalist Design", "Technical Focus", "Skills Emphasis", "Project Showcase"]
  },
  {
    id: 5,
    name: "Academic Scholar",
    description: "Formal layout perfect for academic and research positions",
    image: "/templates/academic-scholar.jpg",
    category: "Academic",
    featured: false,
    longDescription: "Designed for academic professionals, researchers, and scholars. Features sections for publications, research experience, and academic achievements.",
    features: ["Academic Format", "Publication Section", "Research Focus", "Formal Layout"]
  },
  {
    id: 6,
    name: "Sales Professional",
    description: "Dynamic design that highlights achievements and results",
    image: "/templates/sales-professional.jpg",
    category: "Sales",
    featured: false,
    longDescription: "Perfect for sales professionals who want to highlight their achievements and results. Features sections that emphasize metrics, targets achieved, and client relationships.",
    features: ["Results-Oriented", "Metrics Focus", "Achievement Highlights", "Dynamic Layout"]
  }
];

export default function TemplatePage({ params }: { params: { id: string } }) {
  const templateId = parseInt(params.id);
  const template = resumeTemplates.find(t => t.id === templateId);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Template Not Found</h1>
          <p className="mt-4 text-gray-600">The template you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Templates
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <a href="/" className="text-blue-600 hover:text-blue-700">← Back to Templates</a>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Template Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-lg mb-2">{template.name}</div>
                  <div className="text-gray-500 text-sm">Template Preview</div>
                </div>
              </div>
            </div>
            
            {/* Additional preview options */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Use This Template
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Download Preview
              </button>
            </div>
          </div>

          {/* Template Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{template.name}</h1>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {template.category}
                </span>
                {template.featured && (
                  <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {template.longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Template Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {template.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best For */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best For</h3>
              <p className="text-gray-600">{template.description}</p>
            </div>

            {/* Customization Options */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Customization Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Change colors and fonts</li>
                <li>• Rearrange sections</li>
                <li>• Add or remove components</li>
                <li>• Export to PDF or Word</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
