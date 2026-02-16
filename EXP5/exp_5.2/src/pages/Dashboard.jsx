import React from "react";

export default function Dashboard() {
  const skills = [
    { name: "C++", desc: "Strong in problem solving, OOP concepts, and DSA implementation." },
    { name: "Java", desc: "Good understanding of OOP, collections, and basic backend concepts." },
    { name: "Python", desc: "Used for scripting, automation, and basic ML/AI related tasks." },
    { name: "HTML", desc: "Creates structure of webpages using semantic tags and clean layout." },
    { name: "CSS", desc: "Designs UI using flexbox, grid, transitions, and responsive layouts." },
    { name: "JavaScript", desc: "Works with DOM, events, ES6 concepts, and interactive UI building." },
    { name: "React", desc: "Builds SPA using components, props, hooks, and React Router." },
  ];

  return (
    <div className="dashboard-wrapper">
      <h1 className="dashboard-title">📊 Skills Dashboard</h1>

      <div className="dashboard-card-modern">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid-modern">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card-modern">
              <h3 className="skill-title-modern">{skill.name}</h3>
              <p className="skill-desc-modern">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
