// src/components/Projects.jsx
// pour la pagination
import { useState } from "react";

const PROJECTS_PER_PAGE = 8;


const projects = [
  {
    title: "BovWeight – Estimation du poids du bétail",
    description:
      "Application intelligente permettant d’estimer le poids du bétail à partir d’images capturées par smartphone, combinant vision par ordinateur et régression.",
    link: "#",
    tech: ["Deep Learning", "Computer Vision", "CNN", "Node.js", "React"]
  },
  {
    title: "Système de prédiction d’éligibilité au crédit",
    description:
      "Application web intégrant un modèle de régression logistique pour prédire la légitimité d’un utilisateur à obtenir un prêt bancaire.",
    link: "#",
    tech: ["Machine Learning", "Scikit-learn", "Django", "Pipeline ML"]
  },
  {
    title: "Application R Shiny d’analyse statistique",
    description:
      "Application interactive destinée aux data scientists pour l’analyse univariée et bivariée de fichiers CSV, Excel, JSON et DTA (Stata).",
    link: "https://meteo20.shinyapps.io/data/",
    tech: ["R", "Shiny", "Statistiques", "ggplot2"]
  },
  {
    title: "Developpemnt d'un site Web pour la societe Eliort",
    description:
      "Ce site decrit l'entreprise Eliort, ses activités( services ) et ses partenaires principaux",
    link: "https://eliort-axlv.vercel.app/",
    tech: ["Framework Django", "Python", "Htlm - css - javascript"]
  },
  {
    title: "Étude de marché agro-industrielle (Côte d’Ivoire)",
    description:
      "Analyse complète du secteur agro-industriel ivoirien : acteurs clés, chaînes de valeur, tendances, opportunités d’investissement et risques.",
    link: "https://meteo20.shinyapps.io/data/",
    tech: ["Étude de marché", "Analyse statistique", "Data Collection"]
  },
  {
    title: "API de réseau social",
    description:
      "Conception et développement d’une API backend pour un réseau social avec définition de la cible, des fonctionnalités et du contenu innovant.",
    link: "https://meteo20.shinyapps.io/data/",
    tech: ["Node.js", "API REST", "Base de données"]
  },
  {
    title: "Système IoT de collecte et traitement de données 2025",
    description:
      "Projet IoT intégrant des capteurs pour la collecte de données en temps réel et leur exploitation via des modèles d’analyse et d’IA.",
    link: "https://meteo20.shinyapps.io/data/",
    tech: ["IoT", "Capteurs", "Edge AI", "Traitement temps réel"]
  },
  {
  title: "Projet Data Science – Prédiction du risque de défaut de crédit 2025",
  description:
    "Développement d’un modèle de machine learning supervisé pour évaluer le risque de défaut de remboursement lors des demandes de prêt bancaire. Analyse des données, prétraitement, ingénierie de variables, entraînement et évaluation de modèles de classification, avec interprétation des résultats pour l’aide à la décision.",
  link: "#",
  tech: [
    "Python",
    "Machine Learning",
    "Classification",
    "Scikit-learn",
    "Analyse de données"
  ]
},
{
  title: "Projet IA – Analyse de spectres d’exoplanètes (Mission ARIEL) 2025",
  description:
    "Analyse de spectres infrarouges et visibles simulés afin de prédire la présence d’eau et de nuages dans les atmosphères d’exoplanètes. Prétraitement des données, ingénierie de variables, implémentation de modèles de classification binaire et évaluation des performances (ROC-AUC, accuracy, validation croisée).",
  link: "#",
  tech: [
    "Python",
    "Machine Learning",
    "Classification binaire",
    "Data preprocessing",
    "ROC-AUC"
  ]
},

];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;

  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projets réalisés</h2>

      <div className="grid">
        {currentProjects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="card-tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet →
            </a>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ← Précédent
        </button>

        <span className="page-info">
          Page {currentPage} / {totalPages}
        </span>

        <button
          className="btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Suivant →
        </button>
      </div>
    </section>
  );
};

export default Projects;
