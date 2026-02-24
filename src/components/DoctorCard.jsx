import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor, variant = 'light' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group
      ${isDark
        ? 'bg-white/5 border-white/10 hover:border-teal'
        : 'bg-white border-black/5 hover:border-teal/40'
      }`}
    >
      {/* Doctor Image */}
      <div className={`relative h-56 flex items-end justify-center overflow-hidden
        ${isDark ? 'bg-gradient-to-br from-teal/30 to-navy-800' : 'bg-gradient-to-br from-teal-50 to-teal-100/80'}`}
      >
        {/* Avatar Placeholder with initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-28 h-28 rounded-full flex items-center justify-center text-5xl shadow-lg
            ${isDark ? 'bg-navy-700/80 border-2 border-white/10' : 'bg-white border-2 border-teal/20'}`}
          >
            {doctor.emoji}
          </div>
        </div>
        {/* Specialty Badge */}
        <div className="absolute top-3 right-3 bg-teal text-white text-xs px-2 py-1 rounded-full font-medium tracking-wide">
          {doctor.badge}
        </div>
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Info */}
      <div className={`p-5 ${isDark ? 'text-white' : ''}`}>
        <h3 className={`font-serif text-xl font-semibold mb-0.5 ${isDark ? 'text-white' : 'text-navy'}`}>
          {doctor.name}
        </h3>
        <p className="text-teal-light text-sm font-medium mb-1">{doctor.specialty}</p>
        <div className={`flex items-center gap-3 text-xs mb-4 ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
          <span>⏱ {doctor.experience}</span>
          <span>•</span>
          <span>⭐ {doctor.rating}</span>
        </div>

        {/* Qualifications */}
        <div className={`text-xs mb-4 font-medium ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          {doctor.qualification}
        </div>

        {/* Available Days */}
        <div className={`flex flex-wrap gap-1 mb-4`}>
          {doctor.days.map(day => (
            <span key={day} className="text-xs bg-teal/10 text-teal px-2 py-0.5 rounded-full">
              {day}
            </span>
          ))}
        </div>

        <Link to="/book-appointment" state={{ doctor: doctor.name, dept: doctor.specialty }}>
          <button className="w-full bg-navy text-white text-xs py-2.5 rounded-sm font-medium tracking-wider uppercase transition-all hover:bg-teal group-hover:bg-teal">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
