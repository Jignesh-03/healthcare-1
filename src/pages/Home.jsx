import React from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import doctors from '../data/doctors';

const services = [
  { icon: '🫀', name: 'Cardiology', desc: 'Advanced cardiac care with cutting-edge diagnostic and interventional procedures by experienced cardiologists.' },
  { icon: '🧠', name: 'Neurology', desc: 'Comprehensive neurological services covering stroke, epilepsy, movement disorders, and cognitive health.' },
  { icon: '🦴', name: 'Orthopedics', desc: 'Expert musculoskeletal care including joint replacement, sports medicine, and spinal surgery.' },
  { icon: '🔬', name: 'Oncology', desc: 'Personalized cancer treatment plans combining the latest therapies with compassionate supportive care.' },
  { icon: '👶', name: 'Pediatrics', desc: 'Dedicated child healthcare from newborns through adolescence, with warmth and expertise.' },
  { icon: '👁️', name: 'Ophthalmology', desc: 'Complete eye care from routine exams to complex surgical interventions including laser corrections.' },
];

const stats = [
  { num: '40+', label: 'Years of Care' },
  { num: '120', label: 'Specialists' },
  { num: '98%', label: 'Satisfaction Rate' },
  { num: '500', label: 'Beds Available' },
];

const testimonials = [
  { text: 'The care I received at Medivance was exceptional. Doctors were thorough, compassionate and took time to explain every step of my treatment.', name: 'Ananya R.', loc: 'Ahmedabad', emoji: '🧑' },
  { text: 'After my cardiac procedure, the follow-up care was remarkable. I felt like a valued patient, not just a case number. Truly world-class facility.', name: 'Vikram S.', loc: 'Surat', emoji: '👴' },
  { text: 'My daughter received pediatric treatment here. The staff made her feel comfortable and the team was reassuringly professional throughout.', name: 'Meena P.', loc: 'Vadodara', emoji: '👩' },
];

const Home = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-gradient-to-br from-navy via-navy-800 to-teal/40 flex items-center relative overflow-hidden">
        {/* BG Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/20 blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <div className="animate-slide-up">
            <div className="section-tag text-gold !text-gold before:!bg-gold mb-4">
              Excellence in Healthcare
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Care That <em className="text-gold not-italic">Restores</em><br />Life's Balance
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
              Medivance Hospital brings together world-class specialists, cutting-edge technology, and a tradition of compassionate care to serve you and your family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-appointment">
                <button className="btn-primary">📅 Book Appointment</button>
              </Link>
              <Link to="/doctors">
                <button className="btn-outline">Meet Our Doctors</button>
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full max-w-sm">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {stats.map(s => (
                  <div key={s.label} className="text-center">
                    <div className="font-serif text-4xl font-semibold text-gold">{s.num}</div>
                    <div className="text-white/50 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-lg shrink-0">🏆</div>
                <div>
                  <div className="text-white text-sm font-medium">NABH Accredited Hospital</div>
                  <div className="text-white/40 text-xs">National Healthcare Excellence Award 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-tag">Our Specialties</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="font-serif text-4xl font-light leading-tight">
            World-Class Medical<br /><em>Departments</em>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Comprehensive care across 20+ specialties, staffed by highly trained physicians.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.name} className="card p-6 relative overflow-hidden group cursor-pointer">
              <div className="absolute left-0 top-0 w-1 h-0 bg-teal group-hover:h-full transition-all duration-300 rounded-l" />
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-2">{s.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED DOCTORS ── */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase mb-3">
                <span className="w-8 h-px bg-gold inline-block" />
                Our Team
              </div>
              <h2 className="font-serif text-4xl font-light text-white">
                Meet Our Top<br /><em className="text-gold">Specialists</em>
              </h2>
            </div>
            <Link to="/doctors">
              <button className="btn-outline text-xs">View All Doctors →</button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.slice(0, 4).map(doc => (
              <DoctorCard key={doc.id} doctor={doc} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="section-tag justify-center">Why Choose Us</div>
            <h2 className="font-serif text-4xl font-light">Healthcare You Can <em>Trust</em></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏥', title: 'State-of-art Facility', desc: '500-bed hospital with latest medical equipment' },
              { icon: '👨‍⚕️', title: '120+ Specialists', desc: 'Expert doctors from top medical institutions' },
              { icon: '🚑', title: '24/7 Emergency', desc: 'Round-the-clock emergency care and ICU' },
              { icon: '💊', title: 'In-house Pharmacy', desc: 'Full-service pharmacy open 24 hours daily' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-lg p-6 text-center border border-black/5 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-serif text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">Patient Stories</div>
          <h2 className="font-serif text-4xl font-light">What Our Patients <em>Say</em></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white rounded-lg p-7 border border-black/5 relative">
              <div className="absolute top-4 left-6 font-serif text-8xl text-teal opacity-10 leading-none">"</div>
              <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-lg">{t.emoji}</div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-teal py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-white mb-3">
            Ready to Prioritise Your Health?
          </h2>
          <p className="text-white/70 mb-8">Book an appointment with our specialists today. Same-day slots often available.</p>
          <Link to="/book-appointment">
            <button className="bg-white text-teal px-8 py-3.5 rounded-sm font-sans font-semibold text-sm tracking-wider uppercase hover:bg-cream transition-colors">
              📅 Schedule Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
