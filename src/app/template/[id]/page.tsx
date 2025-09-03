'use client';

import { useParams, useRouter } from 'next/navigation';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

const resumeTemplates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech professionals",
    image: "/templates/modern-professional.jpg",
    category: "Professional",
    featured: true,
    tags: ["Modern", "Clean", "Tech", "Professional", "ATS-Friendly"],
    longDescription: "This modern professional template features a clean, contemporary design that's perfect for tech professionals, consultants, and business analysts. The layout emphasizes readability with clear sections for experience, skills, and education.",
    features: [
      "ATS-friendly format ensures your resume passes automated screening",
      "Clean typography that's easy to read for hiring managers",
      "Optimized layout that highlights your technical skills",
      "Professional color scheme that works across all industries",
      "Customizable sections for projects and certifications"
    ]
  },
  {
    id: 2,
    name: "Creative Designer",
    description: "Bold and artistic layout ideal for creative professionals",
    image: "/templates/creative-designer.jpg",
    category: "Creative",
    featured: true,
    tags: ["Creative", "Bold", "Design", "Artistic", "Portfolio"],
    longDescription: "Stand out with this bold and artistic template designed specifically for creative professionals. Features unique styling and layout that showcases your creativity while maintaining professionalism.",
    features: [
      "Eye-catching design that showcases your creative personality",
      "Portfolio section to highlight your best work",
      "Color-coded sections for easy navigation",
      "Space for design skills and software proficiency",
      "Perfect for designers, artists, and creative directors"
    ]
  },
  {
    id: 3,
    name: "Executive Classic",
    description: "Traditional and elegant format for senior executives",
    image: "/templates/executive-classic.jpg",
    category: "Executive",
    featured: false,
    tags: ["Classic", "Executive", "Traditional", "Elegant", "Leadership"],
    longDescription: "A traditional and elegant template designed for senior executives and C-level professionals. Features a sophisticated layout that emphasizes leadership experience and achievements.",
    features: [
      "Sophisticated layout that commands respect",
      "Emphasis on leadership experience and achievements",
      "Traditional format preferred by executive recruiters",
      "Space for board positions and speaking engagements",
      "Professional appearance suitable for C-level positions"
    ]
  },
  {
    id: 4,
    name: "Tech Minimalist",
    description: "Simple and clean design focused on technical skills",
    image: "/templates/tech-minimalist.jpg",
    category: "Tech",
    featured: true,
    tags: ["Minimalist", "Tech", "Simple", "Skills", "Developer"],
    longDescription: "A minimalist approach perfect for software engineers, developers, and IT professionals. The clean design puts focus on technical skills and project experience.",
    features: [
      "Minimal design that puts focus on your technical expertise",
      "Dedicated sections for programming languages and frameworks",
      "Clean layout that's perfect for software developers",
      "GitHub and portfolio links prominently displayed",
      "Optimized for tech recruiters and hiring managers"
    ]
  },
  {
    id: 5,
    name: "Academic Scholar",
    description: "Formal layout perfect for academic and research positions",
    image: "/templates/academic-scholar.jpg",
    category: "Academic",
    featured: false,
    tags: ["Academic", "Research", "Formal", "Scholar", "Publications"],
    longDescription: "Designed for academic professionals, researchers, and scholars. Features sections for publications, research experience, and academic achievements.",
    features: [
      "Traditional academic format with proper sections",
      "Space for publications, research, and conferences",
      "Education section prominently featured",
      "References and recommendation letters section",
      "Perfect for professors, researchers, and PhD candidates"
    ]
  },
  {
    id: 6,
    name: "Sales Professional",
    description: "Dynamic design that highlights achievements and results",
    image: "/templates/sales-professional.jpg",
    category: "Sales",
    featured: false,
    tags: ["Sales", "Dynamic", "Results", "Achievements", "Metrics"],
    longDescription: "Perfect for sales professionals who want to highlight their achievements and results. Features sections that emphasize metrics, targets achieved, and client relationships.",
    features: [
      "Results-oriented layout that showcases your achievements",
      "Metrics and numbers prominently displayed",
      "Dynamic design that reflects your sales personality",
      "Client testimonials and success stories section",
      "Perfect for sales reps, account managers, and business development"
    ]
  }
];

export default function TemplatePage() {
  const params = useParams();
  const router = useRouter();
  const templateId = parseInt(params.id as string);
  const template = resumeTemplates.find(t => t.id === templateId);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Template Not Found</h1>
          <p className="mt-4 text-gray-600">The template you&apos;re looking for doesn&apos;t exist.</p>
          <button 
            onClick={() => router.push('/')}
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Templates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Templates
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Template Preview */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Preview</h2>
              <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
                {/* Template Preview Placeholder */}
                <div className="w-3/4 h-5/6 bg-white shadow-lg border border-gray-200 p-6">
                  <div className="h-1/4 mb-4">
                    <div className="h-6 w-2/3 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-3/4 space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Template Details */}
            <div className="space-y-8">
              {/* Template Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{template.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{template.longDescription}</p>
                
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {template.category}
                  </span>
                  {template.featured && (
                    <span className="ml-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Use This Template
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Download Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
