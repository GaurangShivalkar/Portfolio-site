import React from 'react';
import { FaUniversity, FaCalendarAlt, FaStar, FaAward, FaIdBadge } from 'react-icons/fa';


const CardWrapper = ({ children }) => (
  <div className="backdrop-blur-xl border border-white/20 rounded-2xl w-full h-full p-6 flex flex-col justify-center group hover:border-emerald-500 transition-shadow">
    {children}
  </div>
);

export const EducationCard = ({ item }) => (
  <CardWrapper>
    <div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1" data-swiper-parallax="-500">{item.title}</h3>

      <p className="text-md text-emerald-400 font-semibold flex items-center gap-2 mb-3" data-swiper-parallax="-320">
        <FaUniversity /> {item.institute}
      </p>

      <div className="flex flex-wrap gap-4 text-slate-400 mb-4" data-swiper-parallax="-320">
        <span className="flex items-center gap-2"><FaCalendarAlt /> {item.duration}</span>
        <span className="flex items-center gap-2 font-mono"><FaStar /> CGPA: {item.cgpa}</span>
      </div>

      <ul className="list-disc list-inside space-y-2 text-slate-300" data-swiper-parallax="-320">
        {item.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  </CardWrapper>
);

export const CertificationCard = ({ item }) => (
  <CardWrapper>
    <div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-white" data-swiper-parallax="-500">{item.name}</h3>

      <p className="text-md text-emerald-400 font-semibold flex items-center gap-2 mb-3" data-swiper-parallax="-320">
        <FaAward /> Issued by {item.issuer}
      </p>

      <div className="flex flex-wrap gap-4 text-slate-400 mb-4" data-swiper-parallax="-320">
        <span className="flex items-center gap-2"><FaCalendarAlt /> {item.issued}</span>
        <span className="flex items-center gap-2 font-mono"><FaIdBadge /> Credential ID: {item.credential_id ?? 'N/A'}</span>
      </div>

      <div data-swiper-parallax="-320">
        <h4 className="font-semibold text-md mb-2">Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((s, i) => (
            <span key={i} className="bg-emerald-900/50 text-emerald-300 text-sm font-medium px-3 py-1 rounded-full">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </CardWrapper>
);