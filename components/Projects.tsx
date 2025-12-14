import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-850/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
          Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-900 rounded-lg text-teal-400">
                    <Code size={24} />
                  </div>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    View Code <ExternalLink size={14} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-sm border-l-2 border-slate-700 pl-3">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 p-4 border-t border-slate-700 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-2 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
