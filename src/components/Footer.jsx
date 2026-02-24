import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-navy text-white/60 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="font-serif text-2xl text-white font-semibold mb-3">
            Medi<span className="text-gold">vance</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs mb-5">
            Delivering exceptional healthcare with compassion, integrity, and innovation for over four decades. Serving Gujarat with pride.
          </p>
          <div className="flex gap-3">
            {['📘','📸','🐦','▶️'].map((icon, i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm cursor-pointer hover:bg-teal transition-colors">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: 'Home', path: '/' },
              { label: 'Our Doctors', path: '/doctors' },
              { label: 'Book Appointment', path: '/book-appointment' },
              { label: 'Contact Us', path: '/contact' },
            ].map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm hover:text-gold transition-colors no-underline text-white/50 hover:text-gold">
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex gap-2"><span>📞</span><a href="tel:+917926000000" className="hover:text-gold transition-colors no-underline text-white/50">+91 79-2600-0000</a></li>
            <li className="flex gap-2"><span>✉️</span><a href="mailto:info@medivance.in" className="hover:text-gold transition-colors no-underline text-white/50">info@medivance.in</a></li>
            <li className="flex gap-2"><span>📍</span><span>Ashram Road, Ahmedabad, Gujarat 380009</span></li>
            <li className="flex gap-2"><span>🕐</span><span>Mon–Sat: 8 AM – 9 PM</span></li>
          </ul>
        </div>
      </div>

      {/* Accreditations */}
      <div className="flex flex-wrap gap-4 mb-8 py-6 border-t border-white/10 border-b">
        {['🏆 NABH Accredited', '✅ ISO 9001:2015', '🌟 JCI Certified', '🔬 NABL Lab'].map(a => (
          <span key={a} className="text-xs bg-white/5 px-4 py-2 rounded-full">{a}</span>
        ))}
      </div>

      <div className="text-center text-xs text-white/30">
        © 2026 Medivance Hospital. All rights reserved. &nbsp;|&nbsp; Ahmedabad, Gujarat, India
      </div>
    </div>
  </footer>
);

export default Footer;
