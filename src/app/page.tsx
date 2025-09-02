import { TemplateCard } from '../components/TemplateCard';
import { SearchBar } from '../components/SearchBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CardHoverEffectDemo } from '../components/CardHoverEffectDemo';

const resumeTemplates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech professionals",
    image: "/templates/modern-professional.jpg",
    category: "Professional",
    featured: true
  },
  {
    id: 2,
    name: "Creative Designer",
    description: "Bold and artistic layout ideal for creative professionals",
    image: "/templates/creative-designer.jpg",
    category: "Creative",
    featured: true
  },
  {
    id: 3,
    name: "Executive Classic",
    description: "Traditional and elegant format for senior executives",
    image: "/templates/executive-classic.jpg",
    category: "Executive",
    featured: false
  },
  {
    id: 4,
    name: "Tech Minimalist",
    description: "Simple and clean design focused on technical skills",
    image: "/templates/tech-minimalist.jpg",
    category: "Tech",
    featured: true
  },
  {
    id: 5,
    name: "Academic Scholar",
    description: "Formal layout perfect for academic and research positions",
    image: "/templates/academic-scholar.jpg",
    category: "Academic",
    featured: false
  },
  {
    id: 6,
    name: "Sales Professional",
    description: "Dynamic design that highlights achievements and results",
    image: "/templates/sales-professional.jpg",
    category: "Sales",
    featured: false
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mt-32" />
      


      {/* Search Section removed */}

      {/* Search Container */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {/* Custom Search Icon */}
                  <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                    <rect x="15" y="15" width="4" height="2" rx="1" transform="rotate(45 15 15)" fill="currentColor" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search resume templates..."
                  className="block w-full pl-12 pr-4 py-4 border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-500 bg-transparent"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-200"></div>

              {/* Filter Button */}
              <button className="flex items-center justify-center gap-2 px-6 py-4 hover:bg-gray-50 transition-colors text-gray-700 border-0 md:border-r border-gray-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filter
              </button>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-200"></div>

              {/* Search Button */}
              <button className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition-colors font-medium border-0">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>      {/* Featured Templates */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 overflow-visible">
            {resumeTemplates
              .filter(template => template.featured)
              .map((template) => (
                <div key={template.id} className="w-full flex justify-center">
                  <TemplateCard template={template} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Templates */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 overflow-visible">
            {resumeTemplates.map((template) => (
                <div key={template.id} className="w-full flex justify-center">
                  <TemplateCard template={template} />
                </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Card Hover Effect Demo */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Resume Services</h2>
          <CardHoverEffectDemo />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
