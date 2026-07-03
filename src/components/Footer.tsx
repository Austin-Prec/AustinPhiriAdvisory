import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, Shield, Award, Users, FileCheck, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-navy-100">
      <div className="container-main section-padding pb-8">
        
        {/* Trust Badges Section */}
        <div className="border-b border-navy-600 pb-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Shield size={28} className="text-gold-200 mx-auto mb-2" strokeWidth={1.2} />
              <p className="font-arial text-navy-200 text-xs uppercase tracking-wider">Registered</p>
              <p className="font-arial text-white text-sm font-medium">Malawi</p>
            </div>
            <div>
              <Award size={28} className="text-gold-200 mx-auto mb-2" strokeWidth={1.2} />
              <p className="font-arial text-navy-200 text-xs uppercase tracking-wider">Experience</p>
              <p className="font-arial text-white text-sm font-medium">12+ Years</p>
            </div>
            <div>
              <Users size={28} className="text-gold-200 mx-auto mb-2" strokeWidth={1.2} />
              <p className="font-arial text-navy-200 text-xs uppercase tracking-wider">Donors & Clients</p>
              <p className="font-arial text-white text-sm font-medium">9+ International</p>
            </div>
            <div>
              <FileCheck size={28} className="text-gold-200 mx-auto mb-2" strokeWidth={1.2} />
              <p className="font-arial text-navy-200 text-xs uppercase tracking-wider">Audit Findings</p>
              <p className="font-arial text-white text-sm font-medium">Zero Negative</p>
            </div>
          </div>
        </div>
        
        {/* Registration Details - UPDATED */}
        <div className="border-b border-navy-600 pb-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-arial text-navy-200 text-xs uppercase tracking-wider mb-2">Legal Registration</p>
              <p className="font-arial text-white text-sm">
                <span className="text-navy-200">Legal Name:</span> Austin Phiri Advisory Limited
              </p>
              <p className="font-arial text-white text-sm">
                <span className="text-navy-200">Registration #:</span> COY-BMQHYQE
              </p>
              <p className="font-arial text-white text-sm">
                <span className="text-navy-200">Tax ID (TPIN):</span> 71065132
              </p>
              <p className="font-arial text-gold-300 text-xs mt-1">
                ✓ Certificate of Incorporation issued 08 May 2026
              </p>
            </div>
            <div>
              <p className="font-arial text-navy-200 text-xs uppercase tracking-wider mb-2">UN & Procurement</p>
              <p className="font-arial text-white text-sm">
                <span className="text-navy-200">UNGM #:</span> 1217321
              </p>
              <p className="font-arial text-navy-300 text-xs mt-1">
                ✓ Registered as Organization
              </p>
              <p className="font-arial text-navy-300 text-xs mt-2">
                PPDA Registration: In Progress
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-garamond text-white text-xl font-bold mb-4">
              Austin Phiri Advisory Limited
            </h3>
            <p className="font-arial text-sm leading-relaxed text-navy-200 max-w-md">
              Institutional governance architecture and forensic finance advisory for
              NGOs, private sector corporations, professional associations, and 
              development sector organisations across Southern Africa.
            </p>
          </div>

          <div>
            <h4 className="font-garamond text-white text-lg font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/frameworks', label: 'Frameworks' },
                { to: '/about', label: 'About' },
                { to: '/insights', label: 'Insights' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-arial text-sm text-navy-200 hover:text-gold-200 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-garamond text-white text-lg font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-200 mt-0.5 shrink-0" />
                <a
                  href="mailto:austinpphiri@gmail.com"
                  className="font-arial text-sm text-navy-200 hover:text-gold-200 transition-colors duration-200"
                >
                  austinpphiri@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-200 mt-0.5 shrink-0" />
                <span className="font-arial text-sm text-navy-200">
                  +265 888 879 052
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-200 mt-0.5 shrink-0" />
                <span className="font-arial text-sm text-navy-200">
                  Zomba, Malawi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin size={16} className="text-gold-200 mt-0.5 shrink-0" />
                <a
                  href="https://linkedin.com/in/austinphiriadvisory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-arial text-sm text-navy-200 hover:text-gold-200 transition-colors duration-200"
                >
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-600 pt-6">
          <p className="font-arial text-xs text-navy-300 text-center">
            &copy; 2026 Austin Phiri Advisory Limited. All rights reserved.
          </p>
          <p className="font-arial text-xs text-navy-400 text-center mt-2">
            Registered under the Companies Act (Cap. 46:03) | Certificate of Incorporation issued 08 May 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
