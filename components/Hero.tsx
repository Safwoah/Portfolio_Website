import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Linkedin, Github, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-10 px-4 text-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="z-10 max-w-3xl animate-fade-in-up">
        <div className="mb-6 inline-block p-1 rounded-full bg-gradient-to-tr from-teal-400 to-blue-600">
           <img 
            src="https://picsum.photos/150/150" 
            alt="Profile Placeholder" 
            className="w-32 h-32 rounded-full border-4 border-slate-900 object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-400 mb-4 tracking-tight">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
          {PERSONAL_INFO.title}
        </h2>
        
        <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
          {PERSONAL_INFO.summary}
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors duration-300"
            >
              <div className="p-3 bg-slate-800 rounded-full border border-slate-700 group-hover:border-teal-500/50 group-hover:bg-slate-800/80 transition-all">
                {link.icon === 'linkedin' && <Linkedin size={24} />}
                {link.icon === 'github' && <Github size={24} />}
                {link.icon === 'mail' && <Mail size={24} />}
              </div>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute mt-14">
                {link.platform}
              </span>
            </a>
          ))}
        </div>
      </div>

      <a 
        href="#experience" 
        className="absolute bottom-10 animate-bounce text-slate-500 hover:text-teal-400 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;