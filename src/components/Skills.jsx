// src/components/Skills.jsx

const skills = {
  "Data & IA": [
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Statistiques",
    "Computer Vision",
    "Edge AI"
  ],
  "Outils & Langages": [
    "Python",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "SQL"
  ],
  "IoT & Systèmes": [
    "IoT",
    "Capteurs & Données embarquées",
    "Traitement temps réel"
  ],
  "Web & Backend": [
    "Django",
    "Node.js",
    "React",
    "API REST"
  ],
  "DevOps & Collaboration": [
    "Git & GitHub",
    "Docker (bases)"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Compétences</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skills-category">
          <h3 className="skills-subtitle">{category}</h3>

          <div className="chips">
            {items.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

