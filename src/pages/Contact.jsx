import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const contactInfo = [
  { icon: '📞', title: 'Phone Numbers', lines: ['+91 79-2600-0000 (Main)', '+91 79-2600-0001 (Emergency)', '108 (Ambulance)'] },
  { icon: '✉️', title: 'Email', lines: ['info@medivance.in', 'appointments@medivance.in', 'hr@medivance.in'] },
  { icon: '📍', title: 'Address', lines: ['Medivance Hospital Complex,', 'Ashram Road, Ellis Bridge,', 'Ahmedabad, Gujarat 380009'] },
  { icon: '🕐', title: 'Working Hours', lines: ['Mon – Sat: 8:00 AM – 9:00 PM', 'Sunday: 10:00 AM – 5:00 PM', '24/7 Emergency Department'] },
];

const departments = [
  { name: 'General Enquiry', email: 'info@medivance.in', ext: '100' },
  { name: 'Appointments', email: 'appointments@medivance.in', ext: '101' },
  { name: 'Emergency', email: 'emergency@medivance.in', ext: '108' },
  { name: 'Billing & Insurance', email: 'billing@medivance.in', ext: '102' },
  { name: 'Medical Records', email: 'records@medivance.in', ext: '103' },
  { name: 'Pharmacy', email: 'pharmacy@medivance.in', ext: '104' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSend = () => {
    if (form.name && form.message) setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-navy-800 py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-teal/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-gold inline-block" /> Get in Touch
          </div>
          <h1 className="font-serif text-5xl font-light text-white mb-3">
            Contact <em className="text-gold">Medivance</em>
          </h1>
          <p className="text-white/50 max-w-xl text-base leading-relaxed">
            We're here to help. Reach out for appointments, information, or any assistance you need.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map(c => (
            <div key={c.title} className="bg-white rounded-lg p-6 border border-black/5 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h4 className="font-serif text-lg font-semibold text-navy mb-2">{c.title}</h4>
              {c.lines.map(l => <p key={l} className="text-gray-500 text-sm leading-relaxed">{l}</p>)}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-black/5 shadow-sm">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-6">We'll respond to <strong>{form.email || form.phone}</strong> within 2 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); }}
                  className="btn-navy">Send Another Message</button>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-semibold mb-6">Send Us a Message</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="form-label">Phone</label>
                    <input className="form-input" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Subject</label>
                  <select className="form-input" value={form.subject} onChange={e => set('subject', e.target.value)}>
                    <option value="">Select subject</option>
                    <option>General Enquiry</option><option>Appointment</option><option>Feedback</option>
                    <option>Billing</option><option>Medical Records</option><option>Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="form-label">Message *</label>
                  <textarea rows={4} className="form-input resize-none" value={form.message}
                    onChange={e => set('message', e.target.value)} placeholder="Write your message here..." />
                </div>
                <button onClick={handleSend} className="btn-navy w-full">Send Message 📨</button>
              </>
            )}
          </div>

          {/* Department Directory */}
          <div>
            <h2 className="font-serif text-2xl font-semibold mb-6">Department Directory</h2>
            <div className="flex flex-col gap-3">
              {departments.map(d => (
                <div key={d.name} className="bg-white rounded-lg px-5 py-4 border border-black/5 flex items-center justify-between hover:border-teal/40 transition-colors">
                  <div>
                    <div className="font-medium text-sm text-navy">{d.name}</div>
                    <div className="text-gray-400 text-xs">{d.email}</div>
                  </div>
                  <div className="text-teal font-semibold text-sm bg-teal/10 px-3 py-1 rounded-full">
                    Ext. {d.ext}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-teal/5 border border-teal/20 rounded-lg p-5 mt-6">
              <h4 className="font-serif text-lg font-semibold text-navy mb-1">Need an Appointment?</h4>
              <p className="text-gray-500 text-sm mb-4">Book online and skip the wait. Confirmation within 30 minutes.</p>
              <Link to="/book-appointment">
                <button className="btn-primary w-full">📅 Book Appointment Online</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100 h-72 flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <div className="text-5xl mb-3">🗺️</div>
          <h4 className="font-serif text-xl font-semibold text-navy mb-1">Find Us on the Map</h4>
          <p className="text-gray-500 text-sm">Ashram Road, Ellis Bridge, Ahmedabad, Gujarat 380009</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">
            <button className="btn-primary mt-4">Open in Google Maps</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
