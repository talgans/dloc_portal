import React from 'react';
import { ThemeColor } from '../types';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  theme: ThemeColor;
  tags: string[];
  iconPath: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  link,
  theme,
  tags,
  iconPath
}) => {
  
  // Theme configuration for the Icon Glow and Accents
  const getThemeColors = (color: ThemeColor) => {
    if (color === 'green') {
      return {
        iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        hoverBorder: 'group-hover:border-emerald-500/30',
        glow: 'group-hover:shadow-emerald-500/10'
      };
    }
    // Default blue/purple
    return {
      iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      hoverBorder: 'group-hover:border-blue-500/30',
      glow: 'group-hover:shadow-blue-500/10'
    };
  };

  const colors = getThemeColors(theme);

  return (
    <a href={link} className={`glass-panel rounded-2xl p-6 flex flex-col h-full group relative overflow-hidden`}>
      {/* Top Section: Icon and Action Arrow */}
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl border ${colors.iconBg} transition-colors`}>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
           </svg>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1">
           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer / Tags */}
      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => {
           // Alternate badge styles for variety, mimicking the "Status" / "Type" badges in the image
           const isPrimary = index === 0;
           const badgeClass = isPrimary 
             ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" 
             : "bg-slate-700/30 text-slate-300 border-slate-600/30";

           return (
             <span key={index} className={`px-2.5 py-1 rounded-md text-xs font-medium border ${badgeClass}`}>
               {tag}
             </span>
           );
        })}
      </div>
    </a>
  );
};