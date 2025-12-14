import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-850/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
          Education
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-teal-400">
                <GraduationCap size={28} />
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">{edu.period}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{edu.institution}</h3>
              <p className="text-slate-300 font-medium mb-2">{edu.degree}</p>
              <p className="text-sm text-slate-500 mb-3">{edu.location}</p>
              {edu.gpa && (
                 <div className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs font-semibold text-slate-300 border border-slate-700">
                   GPA: {edu.gpa}
                 </div>
              )}
              {edu.details && (
                <p className="mt-4 text-sm text-slate-400 italic border-l-2 border-slate-600 pl-3">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
