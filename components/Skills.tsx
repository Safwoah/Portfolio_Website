import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Brain, Database, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Language')) return <Code2 size={24} className="text-blue-400" />;
    if (category.includes('Machine Learning')) return <Brain size={24} className="text-purple-400" />;
    if (category.includes('Data')) return <Database size={24} className="text-green-400" />;
    return <Cloud size={24} className="text-orange-400" />;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-850/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((cat) => (
            <div 
              key={cat.category} 
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                {getIcon(cat.category)}
                <h3 className="text-xl font-semibold text-slate-200">{cat.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      px-4 py-2 rounded-lg border bg-slate-900/50 font-medium text-sm transition-all hover:scale-105 cursor-default
                      ${skill.color}
                    `}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;