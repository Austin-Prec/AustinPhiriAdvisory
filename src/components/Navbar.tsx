import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/frameworks', label: 'Frameworks' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-500 border-b border-navy-400">
      <div className="container-main flex items-center justify-between h-16 px-6 lg:px-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="font-garamond text-white text-lg font-bold tracking-wide">
            Austin Phiri Advisory
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-arial text-sm tracking-wide uppercase transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-gold-200'
                  : 'text-navy-100 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-xs">
            Book Consultation
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-600 border-t border-navy-400">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-arial text-sm tracking-wide uppercase ${
                  location.pathname === link.to
                    ? 'text-gold-200'
                    : 'text-navy-100 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-xs text-center mt-2"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
