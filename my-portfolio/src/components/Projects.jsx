import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Project 1 */}
        <a
          href="https://ipodreact.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p>Music Player</p>
        </a>

        {/* Project 2 */}
        <a
          href="https://eccomerce-website-reactjs-zbg2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p>E-commerce Website</p>
        </a>

        {/* Project 3 */}
        <a
          href="https://super-squad-2dez.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p>SuperSquad project</p>
        </a>

      </div>
    </section>
  );
}
