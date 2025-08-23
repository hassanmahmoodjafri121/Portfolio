import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiAutodeskmaya,
  SiBlender,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Pandas", icon: <SiPandas className="text-black" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
  { name: "Responsive Design", icon: <MdDesignServices className="text-pink-500" /> },
  { name: "UI/UX", icon: <MdDesignServices className="text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "REST APIs", icon: <FaDatabase className="text-indigo-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Maya", icon: <SiAutodeskmaya className="text-teal-500" /> },
  { name: "Blender", icon: <SiBlender className="text-orange-600" /> },
  { name: "Graphic Designing", icon: <MdDesignServices className="text-purple-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="skill-item flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
