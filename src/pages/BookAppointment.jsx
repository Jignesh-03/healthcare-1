import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import doctors from '../data/doctors';

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const BookAppointment = () => {
  const location = useLocation();
  const prefill = location.state || {};

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    doctor: prefill.doctor || '',
    dept: prefill.dept || '',
    date: '',
    time: '',
    notes: '',
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate1 = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.match(/^\d{10}$/)) e.phone = 'Enter valid 10-digit mobile number';
    if (form.email && !form.email.includes('@')) e.email = 'Enter valid email';
    if (!form.age || form.age < 1) e.age = 'Enter valid age';
    if (!form.gender) e.gender = 'Select gender';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validate2 = () => {
    const e = {};
    if (!form.dept) e.dept = 'Select department';
    if (!form.date) e.date = 'Select date';
    if (!form.time) e.time = 'Select time slot';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validate1()) setStep(2);
    if (step === 2 && validate2()) setStep(3);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const deptDoctors = form.dept ? doctors.filter(d => d.specialty === form.dept) : doctors;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-4">
        <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-xl border border-black/5">
          <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
          <h2 className="font-serif text-3xl font-semibold text-navy mb-2">Appointment Confirmed!</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Thank you, <strong>{form.name}</strong>. Your appointment with{' '}
            <strong>{form.doctor || 'our specialist'}</strong> is booked for{' '}
            <strong>{form.date}</strong> at <strong>{form.time}</strong>.
          </p>
          <div className="bg-teal/5 border border-teal/20 rounded-lg p-4 text-left text-sm mb-6">
            <div className="flex justify-between mb-1"><span className="text-gray-500">Patient</span><span className="font-medium">{form.name}</span></div>
            <div className="flex justify-between mb-1"><span className="text-gray-500">Department</span><span className="font-medium">{form.dept}</span></div>
            <div className="flex justify-between mb-1"><span className="text-gray-500">Doctor</span><span className="font-medium">{form.doctor || 'To be assigned'}</span></div>
            <div className="flex justify-between mb-1"><span className="text-gray-500">Date</span><span className="font-medium">{form.date}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-medium">{form.time}</span></div>
          </div>
          <p className="text-xs text-gray-400 mb-5">Confirmation will be sent to <strong>{form.phone}</strong></p>
          <button onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'',phone:'',email:'',age:'',gender:'',doctor:'',dept:'',date:'',time:'',notes:'' }); }}
            className="btn-navy w-full">
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-navy-800 py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-gold inline-block" /> Online Booking
          </div>
          <h1 className="font-serif text-4xl font-light text-white mb-2">
            Book Your <em className="text-gold">Appointment</em>
          </h1>
          <p className="text-white/50 text-sm">Complete the form below to schedule a consultation with our specialists.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Steps Indicator */}
        <div className="flex items-center mb-10">
          {[1, 2, 3].map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex flex-col items-center gap-1`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                  ${step > s ? 'bg-teal text-white' : step === s ? 'bg-navy text-white' : 'bg-gray-200 text-gray-400'}`}>
                  {step > s ? '✓' : s}
                </div>
                <span className={`text-xs font-medium ${step >= s ? 'text-navy' : 'text-gray-400'}`}>
                  {['Personal Info', 'Appointment', 'Review'][i]}
                </span>
              </div>
              {i < 2 && <div className={`flex-1 h-0.5 mx-3 mb-4 ${step > s ? 'bg-teal' : 'bg-gray-200'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-black/5">
          {/* STEP 1: Personal Info */}
          {step === 1 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Patient Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input className={`form-input ${errors.name ? 'border-red-400' : ''}`} value={form.name}
                    onChange={e => set('name', e.target.value)} placeholder="Your full name" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="form-label">Mobile Number *</label>
                  <input className={`form-input ${errors.phone ? 'border-red-400' : ''}`} value={form.phone}
                    onChange={e => set('phone', e.target.value)} placeholder="10-digit mobile number" maxLength={10} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input className={`form-input ${errors.email ? 'border-red-400' : ''}`} value={form.email}
                    onChange={e => set('email', e.target.value)} placeholder="your@email.com" type="email" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="form-label">Age *</label>
                    <input className={`form-input ${errors.age ? 'border-red-400' : ''}`} value={form.age}
                      onChange={e => set('age', e.target.value)} placeholder="Age" type="number" min="1" max="120" />
                    {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                  </div>
                  <div>
                    <label className="form-label">Gender *</label>
                    <select className={`form-input ${errors.gender ? 'border-red-400' : ''}`} value={form.gender}
                      onChange={e => set('gender', e.target.value)}>
                      <option value="">Select</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Appointment Details */}
          {step === 2 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Appointment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Department *</label>
                  <select className={`form-input ${errors.dept ? 'border-red-400' : ''}`} value={form.dept}
                    onChange={e => { set('dept', e.target.value); set('doctor', ''); }}>
                    <option value="">Choose Department</option>
                    {[...new Set(doctors.map(d => d.specialty))].map(s => <option key={s}>{s}</option>)}
                  </select>
                  {errors.dept && <p className="text-red-500 text-xs mt-1">{errors.dept}</p>}
                </div>
                <div>
                  <label className="form-label">Preferred Doctor</label>
                  <select className="form-input" value={form.doctor} onChange={e => set('doctor', e.target.value)}>
                    <option value="">Any Available Doctor</option>
                    {deptDoctors.map(d => <option key={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Preferred Date *</label>
                  <input type="date" className={`form-input ${errors.date ? 'border-red-400' : ''}`} value={form.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={e => set('date', e.target.value)} />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mt-5">
                <label className="form-label mb-3 block">Select Time Slot *</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map(t => (
                    <button key={t} type="button"
                      onClick={() => set('time', t)}
                      className={`py-2 text-xs font-medium rounded-sm border transition-all cursor-pointer
                        ${form.time === t ? 'bg-teal text-white border-teal' : 'border-gray-200 text-gray-600 hover:border-teal hover:text-teal bg-transparent'}`}>
                      {t}
                    </button>
                  ))}
                </div>
                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
              </div>

              {/* Notes */}
              <div className="mt-5">
                <label className="form-label">Additional Notes</label>
                <textarea rows={3} className="form-input resize-none" value={form.notes}
                  onChange={e => set('notes', e.target.value)}
                  placeholder="Describe your symptoms or reason for visit..." />
              </div>
            </div>
          )}

          {/* STEP 3: Review */}
          {step === 3 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Confirm Appointment</h2>
              <div className="bg-cream rounded-lg p-6 divide-y divide-gray-200 text-sm mb-6">
                {[
                  ['Patient Name', form.name],
                  ['Mobile', form.phone],
                  ['Email', form.email || '—'],
                  ['Age / Gender', `${form.age} yrs / ${form.gender}`],
                  ['Department', form.dept],
                  ['Doctor', form.doctor || 'Any Available'],
                  ['Date', form.date],
                  ['Time', form.time],
                  ['Notes', form.notes || '—'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2.5">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-medium text-navy text-right max-w-xs">{v}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-5">
                ℹ️ We'll call you within 30 minutes to confirm your appointment slot.
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-5 border-t border-gray-100">
            {step > 1
              ? <button onClick={() => setStep(s => s - 1)} className="btn-outline !text-navy !border-gray-300 hover:!border-teal hover:!text-teal">← Back</button>
              : <div />
            }
            {step < 3
              ? <button onClick={handleNext} className="btn-primary">Continue →</button>
              : <button onClick={handleSubmit} className="btn-primary">✅ Confirm Booking</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
