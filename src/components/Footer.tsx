import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-navy-100">
      <div className="container-main section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-garamond text-white text-xl font-bold mb-4">
              Austin Phiri Advisory Limited
            </h3>
            <p className="font-arial text-sm leading-relaxed text-navy-200 max-w-md">
              Institutional governance architecture and forensic finance advisory for
              NGOs, professional associations, and development sector organisations
              across Southern Africa.
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
                  linkedin.com/in/austinphiriadvisory
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-600 pt-6">
          <p className="font-arial text-xs text-navy-300 text-center">
            &copy; 2026 Austin Phiri Advisory Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
