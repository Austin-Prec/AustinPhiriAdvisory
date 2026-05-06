import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Shield, Search, FileCheck, TrendingUp } from 'lucide-react';

// Articles data directly in the component - no external file needed
const articles = [
  {
    id: 1,
    title: "Why Governance Frameworks Fail: The Enforcement Gap",
    excerpt: "Institutions don't fail because they lack governance frameworks. They fail because enforcement is left to individual integrity rather than embedded in structural controls.",
    category: "Governance",
    author: "Austin Precious Phiri",
    date: "May 6, 2026",
    readTime: "5 min read",
    icon: Shield
  },
  {
    id: 2,
    title: "Forensic Readiness: Preparing Before Fraud Happens",
    excerpt: "Most organisations only think about forensic investigation after fraud is detected. True forensic readiness means building the infrastructure to investigate any transaction at any time.",
    category: "Forensic Finance",
    author: "Austin Precious Phiri",
    date: "May 6, 2026",
    readTime: "4 min read",
    icon: Search
  },
  {
    id: 3,
    title: "Donor Compliance in 2026: What NGOs Need to Know",
    excerpt: "With increasing scrutiny on development funding, NGOs must move beyond checkbox compliance to embedded structural controls that satisfy donor requirements.",
    category: "Compliance",
    author: "Austin Precious Phiri",
    date: "May 1, 2026",
    readTime: "6 min read",
    icon: FileCheck
  },
  {
    id: 4,
    title: "The Cost of Weak Internal Controls: A Forensic Perspective",
    excerpt: "Drawing on six forensic investigations, this article examines the common patterns that enable financial irregularities to go undetected for years.",
    category: "Forensic Finance",
    author: "Austin Precious Phiri",
    date: "April 22, 2026",
    readTime: "7 min read",
    icon: TrendingUp
  },
  {
    id: 5,
    title: "Building People-Independent Governance Systems",
    excerpt: "The Structural Integrity Framework (SIF) offers a practical methodology for designing control environments that hold regardless of who is in the room.",
    category: "Governance",
    author: "Austin Precious Phiri",
    date: "April 10, 2026",
    readTime: "8 min read",
    icon: Shield
  },
  {
    id: 6,
    title: "IFRS Transition for NGOs: Common Pitfalls and Solutions",
    excerpt: "Moving from cash-basis to accrual accounting under IFRS presents challenges. Understanding the common pitfalls can save time and audit issues.",
    category: "Financial Reporting",
    author: "Austin Precious Phiri",
    date: "March 25, 2026",
    readTime: "5 min read",
    icon: FileCheck
  }
];

// Sort articles by date (newest first)
const sortedArticles = [...articles].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

export default function Insights() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Insights
          </h1>
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            Thought leadership on governance architecture, forensic finance, and 
            institutional control systems from the practitioner's perspective.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => {
              const IconComponent = article.icon;
              return (
                <div
                  key={article.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-navy-300"
                >
                  <IconComponent size={32} className="text-crimson-400 mb-4" strokeWidth={1.5} />
                  
                  <span className="inline-block bg-navy-50 text-navy-500 text-xs font-semibold px-2 py-1 rounded mb-3">
                    {article.category}
                  </span>
                  
                  <h3 className="font-garamond text-navy-500 text-xl font-bold mb-2">
                    {article.title}
                  </h3>
                  
                  <p className="font-arial text-gray-500 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{article.author.split(' ')[0]}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button
                    onClick={() => window.location.href = `/insights/${article.id}`}
                    className="inline-flex items-center gap-2 text-crimson-400 text-sm font-semibold hover:text-crimson-500 transition-colors"
                  >
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Subscribe Section */}
          <div className="mt-16 bg-navy-50 rounded-lg p-8 text-center">
            <h3 className="font-garamond text-navy-500 text-2xl font-bold mb-3">
              Subscribe to Insights
            </h3>
            <p className="font-arial text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              Get the latest articles and thought leadership delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-navy-400"
              />
              <button
                type="submit"
                className="bg-navy-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-navy-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="font-arial text-gray-400 text-xs mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
