
import React from 'react';

const experiences = [
  {
    role: "AR in Medical Billing",
    company: "Athelas Savi",
    duration: " 19/12/2023-12/04/2023",
    description:
      "Worked as an Accounts Receivable specialist in medical billing, managing patient accounts, processing claims, and ensuring timely payments. Collaborated with healthcare providers to resolve billing issues."
  },
  {
    role: "AR in Medical Billing",
    company: "Coronis Ajuba",
    duration: " 03/06/2023-03/08/2023",
    description:
      "Served as an Accounts Receivable specialist in medical billing, focusing on claim processing, patient account management, and resolving billing discrepancies. Worked closely with healthcare providers to ensure accurate billing practices."
  },

  {
    role: "Web Developer",
    company: " GEOTECH",
    duration: "28/10/2024-28/02/2025",
    description:
      "Developed and maintained web applications, focusing on user experience and functionality. Collaborated with cross-functional teams to design, implement, and optimize web solutions for various projects.  Utilized modern web technologies to enhance application performance and user engagement."
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
