import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Mail } from 'lucide-react';
import { Shield, Search, FileCheck, TrendingUp } from 'lucide-react';

// Article data (same as Insights page - but with full content)
const articles = [
  {
    id: 1,
    title: "Why Governance Frameworks Fail: The Enforcement Gap",
    excerpt: "Institutions don't fail because they lack governance frameworks...",
    content: `
      <p>Institutions across Africa invest significant resources in developing governance frameworks—policy manuals, organograms, delegation matrices, and compliance checklists. Yet governance failures continue to occur. The question is not whether frameworks exist, but whether they are enforceable.</p>
      
      <p>The fundamental observation is this: institutions do not fail because they lack governance frameworks. They fail because enforcement is left to individual integrity rather than embedded in structural controls.</p>
      
      <h2>The Enforcement Gap</h2>
      
      <p>When enforcement depends on individual willingness to comply, governance becomes optional. The moment a senior manager decides a control is inconvenient, it is bypassed. The moment a board member exerts pressure, the system bends.</p>
      
      <p>Structural enforcement means the control holds regardless of who is in the room. It means the system does not require courage to enforce—it simply operates.</p>
      
      <h2>The SIF Approach</h2>
      
      <p>The Structural Integrity Framework (SIF) addresses this gap through four interdependent pillars: Policy Architecture, Operational Controls, Authority Architecture, and Enforcement Mechanisms. Each pillar is designed to function independently of individual discretion.</p>
      
      <p>When fully implemented, the SIF creates an environment where the path of least resistance is also the path of compliance. This is how institutions move from governance-as-documentation to governance-as-enforcement.</p>
    `,
    category: "Governance",
    author: "Austin Precious Phiri",
    date: "May 6, 2026",
    readTime: "5 min read",
    icon: Shield
  },
  {
    id: 2,
    title: "Forensic Readiness: Preparing Before Fraud Happens",
    excerpt: "Most organisations only think about forensic investigation after fraud is detected...",
    content: `
      <p>Most organisations only think about forensic investigation after fraud is detected. By then, evidence may have been destroyed, witnesses may have left, and the trail has gone cold.</p>
      
      <p>True forensic readiness means building the infrastructure to investigate any transaction at any time—before fraud occurs, not after.</p>
      
      <h2>The Five Pillars</h2>
      
      <p>The Forensic Readiness Framework (FRF) establishes five pillars: Beneficiary Verification Architecture, Payroll Integrity Controls, Vendor and Payee Verification Register, Quarterly Forensic Review Protocol, and Board-Led Forensic Governance.</p>
      
      <p>Each pillar ensures that when a question arises—about a payment, a beneficiary, or a vendor—the answer can be produced quickly, completely, and with evidentiary integrity.</p>
      
      <h2>Why This Matters</h2>
      
      <p>Organisations that are forensically ready investigate in weeks, not months. They recover funds. They hold perpetrators accountable. And they restore donor confidence faster.</p>
    `,
    category: "Forensic Finance",
    author: "Austin Precious Phiri",
    date: "May 6, 2026",
    readTime: "4 min read",
    icon: Search
  },
  {
    id: 3,
    title: "Donor Compliance in 2026: What NGOs Need to Know",
    excerpt: "With increasing scrutiny on development funding...",
    content: `
      <p>With increasing scrutiny on development funding, NGOs must move beyond checkbox compliance to embedded structural controls that satisfy donor requirements.</p>
      
      <p>The days of passive compliance are over. Donors are now conducting forensic reviews, beneficiary verifications, and expenditure tracking. Organisations that cannot produce audit-ready documentation on demand risk funding suspension.</p>
      
      <h2>The New Standard</h2>
      
      <p>Donor compliance in 2026 requires three things: real-time reporting capability, independent verification trails, and structural controls that prevent misappropriation before it happens.</p>
      
      <p>The organisations that thrive will be those that treat compliance not as a donor requirement, but as an institutional capability.</p>
    `,
    category: "Compliance",
    author: "Austin Precious Phiri",
    date: "May 1, 2026",
    readTime: "6 min read",
    icon: FileCheck
  },
  {
    id: 4,
    title: "The Cost of Weak Internal Controls: A Forensic Perspective",
    excerpt: "Drawing on six forensic investigations...",
    content: `
      <p>Drawing on six forensic investigations, this article examines the common patterns that enable financial irregularities to go undetected for years.</p>
      
      <p>In every case, the pattern was the same: weak segregation of duties, inadequate supervisory review, and enforcement mechanisms that existed on paper but not in practice.</p>
      
      <h2>The Financial Impact</h2>
      
      <p>The total quantified loss across these six investigations exceeded MWK 50 million. In each case, the losses could have been prevented with stronger structural controls.</p>
      
      <h2>The Lesson</h2>
      
      <p>Weak controls are not victimless. They enable fraud, erode donor confidence, and damage institutional reputation. The cost of prevention is always lower than the cost of investigation.</p>
    `,
    category: "Forensic Finance",
    author: "Austin Precious Phiri",
    date: "April 22, 2026",
    readTime: "7 min read",
    icon: TrendingUp
  },
  {
    id: 5,
    title: "Building People-Independent Governance Systems",
    excerpt: "The Structural Integrity Framework (SIF) offers a practical methodology...",
    content: `
      <p>The Structural Integrity Framework (SIF) offers a practical methodology for designing control environments that hold regardless of who is in the room.</p>
      
      <p>Most governance frameworks assume good faith. They assume that people will follow policies because they are written down. This assumption is the root of most governance failures.</p>
      
      <h2>The Four Pillars</h2>
      
      <p>The SIF operates through four interdependent pillars: Policy Architecture (defining intent and boundaries), Operational Controls (embedding compliance into daily workflows), Authority Architecture (constraining delegation), and Enforcement Mechanisms (ensuring consequences).</p>
      
      <p>When all four pillars are implemented, the system does not depend on individual integrity—it functions regardless of who is in the role.</p>
    `,
    category: "Governance",
    author: "Austin Precious Phiri",
    date: "April 10, 2026",
    readTime: "8 min read",
    icon: Shield
  },
  {
    id: 6,
    title: "IFRS Transition for NGOs: Common Pitfalls and Solutions",
    excerpt: "Moving from cash-basis to accrual accounting under IFRS presents challenges...",
    content: `
      <p>Moving from cash-basis to accrual accounting under IFRS presents challenges. Understanding the common pitfalls can save time and audit issues.</p>
      
      <h2>Pitfall 1: Opening Balances</h2>
      
      <p>Many organisations underestimate the work required to establish accurate opening balances under IFRS. Historical transactions must be reviewed and reclassified.</p>
      
      <h2>Pitfall 2: Going Concern Assessment</h2>
      
      <p>Under IFRS, management must explicitly assess whether the organisation can continue operating. This requires financial forecasting and disclosure of material uncertainties.</p>
      
      <h2>The Solution</h2>
      
      <p>Start early. Engage advisors with NGO experience. Build a transition working paper that documents every adjustment. The investment in a clean transition pays for itself in audit savings.</p>
    `,
    category: "Financial Reporting",
    author: "Austin Precious Phiri",
    date: "March 25, 2026",
    readTime: "5 min read",
    icon: FileCheck
  }
];

export default function Article() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-garamond text-2xl mb-4">Article not found</h1>
          <Link to="/insights" className="text-crimson-400 hover:underline">← Back to Insights</Link>
        </div>
      </div>
    );
  }
  
  const IconComponent = article.icon;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <div>
      {/* Article Header */}
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <Link to="/insights" className="inline-flex items-center gap-2 text-navy-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <IconComponent size={32} className="text-crimson-400" />
              <span className="text-crimson-400 text-sm uppercase tracking-wider">{article.category}</span>
            </div>
            <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-navy-200 text-sm">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none font-arial text-gray-600 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
              
              {/* Share Section */}
              <div className="border-t border-gray-100 mt-8 pt-6">
                <h4 className="font-arial text-sm font-semibold mb-3">Share this article</h4>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0077b5] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-[#006699] transition-colors"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a 
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(currentUrl)}`}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-700 transition-colors"
                  >
                    <Mail size={16} /> Email
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar - Author Bio */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-28">
                <h3 className="font-garamond text-navy-500 text-lg font-bold mb-3">About the Author</h3>
                <p className="font-arial text-gray-600 text-sm leading-relaxed mb-3">
                  <strong>Austin Precious Phiri</strong> is a governance architect and forensic finance practitioner with 12+ years of experience across the financial sector, international development, and civil society.
                </p>
                <Link to="/about" className="text-crimson-400 text-sm hover:underline inline-flex items-center gap-1">
                  Read full bio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
