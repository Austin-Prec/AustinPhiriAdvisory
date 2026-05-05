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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800">
            <div className="container-fluid px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Brand */}
                    <Link to="/" className="flex items-center gap-3">
                        <img 
                            src="/APA-logo.png" 
                            alt="Austin Phiri Advisory" 
                            className="h-10 w-auto object-contain"
                        />
                        <span className="font-semibold text-white text-lg">Austin Phiri Advisory</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-white hover:text-gray-300 transition ${
                                    location.pathname === link.to ? 'text-blue-400' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/book"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className={`text-white hover:text-gray-300 py-2 ${
                                    location.pathname === link.to ? 'text-blue-400' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/book"
                            onClick={() => setMobileOpen(false)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
                        >
                            Book Consultation
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
