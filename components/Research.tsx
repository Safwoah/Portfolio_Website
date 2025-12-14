import React from 'react';
import { RESEARCH } from '../constants';
import { FileText, Microscope } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
          Research Experience
        </h2>

        <div className="space-y-8">
          {RESEARCH.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 md:p-8 hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 hidden sm:block">
                  <Microscope size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 leading-tight mb-2">
                    {item.title}
                  </h3>
                  {item.publication && (
                    <p className="flex items-center gap-2 text-sm text-teal-400 font-medium bg-teal-900/20 w-fit px-3 py-1 rounded-full mb-3">
                      <FileText size={14} />
                      {item.publication}
                    </p>
                  )}
                   {item.status && (
                    <p className="flex items-center gap-2 text-sm text-yellow-400 font-medium bg-yellow-900/20 w-fit px-3 py-1 rounded-full mb-3">
                      <FileText size={14} />
                      {item.status}
                    </p>
                  )}
                  <ul className="space-y-2 mt-4">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm md:text-base flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;