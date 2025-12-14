import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 px-4 border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-200 mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Open to opportunities in Machine Learning, Computer Vision, and Data Science.
        </p>
        
        <div className="flex justify-center gap-8 mb-8">
          {SOCIAL_LINKS.map(link => (
             <a 
              key={link.platform}
              href={link.url}
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label={link.platform}
            >
              {link.icon === 'linkedin' && <Linkedin size={24} />}
              {link.icon === 'github' && <Github size={24} />}
              {link.icon === 'mail' && <Mail size={24} />}
            </a>
          ))}
        </div>
        
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Safwa Mohammed Abdul Jabbar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;