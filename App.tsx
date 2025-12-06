import React, { useCallback } from "react";
import { ResourceCard } from "./components/ResourceCard";
import { resources } from "./data";

const App: React.FC = () => {
  const scrollToContent = useCallback(() => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div className="bg-[#030712] min-h-screen text-white relative selection:bg-indigo-500 selection:text-white">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation / Top Bar */}
        <nav className="border-b border-white/5 bg-[#030712]/50 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
                C
              </div>
              <span className="font-semibold tracking-wide text-gray-200">
                Cosmopolitan University
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <span className="text-white">Dashboard</span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Resources
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Analytics
              </span>
              <div className="pl-4 border-l border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-xs">
                  CU
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center pt-6 pb-16 px-6 text-center">
          <img
            src="/cosmopolitan-seal.png"
            alt="Cosmopolitan University Seal"
            className="hero-graphic float-anim"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Digital Transformation Portal
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Digital Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 glow-text">
              Hub
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your centralized command center for strategic roadmaps,
            presentations, and digital resources.
          </p>

          <button
            onClick={scrollToContent}
            className="glow-button px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group cursor-pointer"
          >
            Access Resources
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Dashboard Content */}
        <div id="content" className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Presentations & Assets
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Access your learning materials
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                Filter by Date
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                View All
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                theme={resource.theme}
                tags={resource.tags}
                iconPath={resource.iconPath}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="border-t border-white/5 pt-12 pb-8 text-center">
            <p className="text-gray-500 font-medium mb-4">
              Digital Learning Coordination Office
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-600 mb-8">
              <a
                href="mailto:mohammed.mahmud@cosmopolitan.edu.ng"
                className="hover:text-blue-400 transition-colors"
              >
                Contact Support
              </a>
              <span>•</span>
              <a
                href="tel:08098194435"
                className="hover:text-blue-400 transition-colors"
              >
                Direct Line
              </a>
            </div>
            <p className="text-gray-700 text-xs">
              © 2025 Cosmopolitan University. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
