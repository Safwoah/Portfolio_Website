import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
          Professional Experience
        </h2>

        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-500 group-hover:bg-teal-500 transition-colors duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 font-medium mt-1">
                    <Briefcase size={16} />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {job.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm md:text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;