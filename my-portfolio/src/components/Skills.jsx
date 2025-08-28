import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub,
  FaGitAlt, FaNodeJs, FaJava, FaDatabase, FaFigma
} from "react-icons/fa";
import {
  SiVite, SiTailwindcss, SiMongodb, SiExpress, SiPostgresql
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
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Graphic Designing", icon: <MdDesignServices className="text-purple-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="skills"
      className="skills-section section p-8"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center"
        variants={containerVariants}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="skill-item flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
          >
            <div className="text-8xl sm:text-9xl md:text-10xl lg:text-[12rem] mb-4">
              {skill.icon}
            </div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
