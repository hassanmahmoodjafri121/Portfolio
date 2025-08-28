import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="projects"
      className="section projects-section p-8"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        variants={cardVariants}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {/* Project 1 */}
        <motion.a
          href="https://ipodreact.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p>Music Player</p>
        </motion.a>

        {/* Project 2 */}
        <motion.a
          href="https://eccomerce-website-reactjs-zbg2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p>E-commerce Website</p>
        </motion.a>

        {/* Project 3 */}
        <motion.a
          href="https://super-squad-2dez.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p>SuperSquad project</p>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
