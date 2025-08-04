
import React from 'react';

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "TechVerse Solutions",
    duration: "Jun 2023 – Aug 2023",
    description:
      "Worked on responsive UI using React and Tailwind CSS. Collaborated in Agile team to deliver features and fix bugs across multiple sprints."
  },
  {
    role: "Web Designer Freelancer",
    company: "Upwork",
    duration: "Jan 2022 – May 2023",
    description:
      "Designed and developed websites for clients using Figma, HTML/CSS, and JavaScript. Focused on UX and accessibility best practices."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role} <span>@ {exp.company}</span></h3>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
