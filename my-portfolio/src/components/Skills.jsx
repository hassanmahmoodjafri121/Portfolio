import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'Vite', 'Tailwind CSS', 'Python',
  'Pandas', 'NumPy', 'Git', 'GitHub', 'Responsive Design', 'UI/UX',
  'Node.js', 'REST APIs', 'Java', 'SQL', 'MongoDB', 'Express.js',
  'PostgreSQL', 'Maya', 'Blender', 'Graphic Designing', 'Figma'
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
