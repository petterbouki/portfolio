// src/components/Gallery.jsx
import cert1 from "../assets/certifications/cert1.png";
import cert2 from "../assets/certifications/cert2.pdf";
import cert3 from "../assets/certifications/cert3.jpeg";

const items = [
  {
    type: "Certification",
    title: "Certification de participation DATA TOUR AFRIQUE",
    image: cert1,
    year: "2025",
  },
  {
    type: "Certification",
    title: "Certification de Simulation Data science jobs FORAGE",
    image: cert2, // PDF
    year: "2024",
  },
  {
    type: "Remise de Prix",
    title:
      "Remise de prix du meilleur Etudiant de Master en Intelligente Artificielle par la societe TECNO",
    image: cert3,
    year: "2025",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section">
      <h2 className="section-title">Certifications & Événements</h2>
      <p className="section-text">
        Quelques certifications, diplômes et moments forts auxquels j’ai participé.
      </p>
      <div className="gallery-grid">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.image}
            target="_blank"
            rel="noreferrer"
            className="card glass gallery-card gallery-link"
          >
            <div className="gallery-image-wrapper">
              {/* Pour les PDF on peut afficher une image placeholder si tu veux */}
              {item.image.endsWith(".pdf") ? (
                <div className="gallery-pdf-placeholder">
                  <span>PDF</span>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
              )}
            </div>
            <div className="gallery-info">
              <span className="gallery-pill">{item.type}</span>
              <h3>{item.title}</h3>
              <p className="gallery-year">{item.year}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
