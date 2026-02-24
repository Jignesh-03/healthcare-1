import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/98 shadow-2xl backdrop-blur-xl' : 'bg-navy'} border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
          <span className="font-serif text-2xl font-semibold text-white tracking-tight">
            Medi<span className="text-gold">vance</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 no-underline
                ${isActive(link.path) ? 'text-gold' : 'text-white/70 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/book-appointment">
            <button className="btn-primary text-xs">
              📅 Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase no-underline
                ${isActive(link.path) ? 'text-gold' : 'text-white/70'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book-appointment">
            <button className="btn-primary w-full text-xs mt-2">📅 Book Appointment</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
