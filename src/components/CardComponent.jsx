import React from 'react';
import { FaUniversity, FaCalendarAlt, FaStar, FaAward, FaIdBadge } from 'react-icons/fa';


export const EducationCardContent = ({ item }) => (
    <div className=' backdrop-blur-xl border border-amber-50 rounded-2xl w-full min-h-80 p-8'>
        <div data-swiper-parallax="-300">
        <h3 className="text-3xl font-extrabold text-white mb-2" >{item.title}</h3>
        <p className="text-lg text-cyan-400 font-semibold flex items-center gap-2 mb-4">
            <FaUniversity /> {item.institute}
        </p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400 mb-6">
            <p className="flex items-center gap-2"><FaCalendarAlt /> {item.duration}</p>
            <p className="flex items-center gap-2 font-mono"><FaStar className="text-yellow-400" /> CGPA: {item.cgpa}</p>
        </div>

        <ul className="list-disc list-inside space-y-3 text-slate-300">
             {item.details.map((detail, i) => (
    <li key={`${item.title}-${i}`}>{detail}</li>
  ))}
        </ul>
        </div>
    </div>
);

export const CertificationCardContent = ({ item }) => (
    <div className='backdrop-blur-xl border border-amber-50 rounded-2xl w-full  min-h-80 p-8'>
         <div data-swiper-parallax="-300">
        <h3 className="text-3xl font-extrabold text-white mb-2">{item.name}</h3>
        <p className="text-lg text-cyan-400 font-semibold flex items-center gap-2 mb-4">
            <FaAward /> Issued by {item.issuer}
        </p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400 mb-6">
            <p className="flex items-center gap-2"><FaCalendarAlt /> Issued: {item.issued}</p>
            <p className="flex items-center gap-2 font-mono"><FaIdBadge /> ID: {item.credential_id}</p>
        </div>
        
        <div className="mt-4">
            <h4 className="font-semibold text-lg mb-3">Skills Gained:</h4>
            <div className="flex flex-wrap gap-2">
             {item.skills.map((skill, i) => (
  <span key={`${item.name}-${skill}-${i}`} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                ))}
            </div>
        </div>
          </div>
    </div>
);