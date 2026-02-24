import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import doctors from '../data/doctors';

const specialties = ['All', ...new Set(doctors.map(d => d.specialty))];

const Doctors = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? doctors : doctors.filter(d => d.specialty === filter);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-navy-800 py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-gold inline-block" /> Our Medical Team
          </div>
          <h1 className="font-serif text-5xl font-light text-white mb-3">
            Meet Our <em className="text-gold">Specialists</em>
          </h1>
          <p className="text-white/50 max-w-xl text-base leading-relaxed">
            Our team of board-certified physicians brings decades of expertise and a patient-first philosophy to deliver the highest quality care.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          {specialties.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border cursor-pointer
                ${filter === s
                  ? 'bg-teal text-white border-teal'
                  : 'text-gray-600 border-gray-200 hover:border-teal hover:text-teal bg-transparent'
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-gray-400 text-sm mb-8">
          Showing <span className="text-navy font-medium">{filtered.length}</span> doctors
          {filter !== 'All' && <> in <span className="text-teal font-medium">{filter}</span></>}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(doc => (
            <div key={doc.id} onClick={() => setSelected(doc)} className="cursor-pointer">
              <DoctorCard doctor={doc} variant="light" />
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Top */}
            <div className="bg-gradient-to-br from-teal/20 to-navy/10 p-8 flex items-center gap-6 relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-navy text-xl leading-none cursor-pointer bg-transparent border-0"
              >✕</button>
              <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-5xl">
                {selected.emoji}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-navy">{selected.name}</h3>
                <p className="text-teal font-medium text-sm">{selected.specialty}</p>
                <p className="text-gray-400 text-xs mt-1">{selected.qualification}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>⏱ {selected.experience}</span>
                  <span>•</span>
                  <span>⭐ {selected.rating}</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">About</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{selected.about}</p>

              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Available Days</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {selected.days.map(d => (
                  <span key={d} className="bg-teal/10 text-teal text-xs px-3 py-1 rounded-full">{d}</span>
                ))}
              </div>
              <p className="text-gray-400 text-xs mb-6">🕐 {selected.timing}</p>

              <Link to="/book-appointment" state={{ doctor: selected.name, dept: selected.specialty }}>
                <button className="btn-navy w-full" onClick={() => setSelected(null)}>
                  📅 Book Appointment with {selected.name.split(' ')[1]}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Doctors;
