// src/components/Hero.jsx
import moi from "../assets/ced_photo.jpeg"; 

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero-content">
        <p className="hero-tag">Ingenieur en IA & Développeur</p>
        <h1>
          Salut, Je suis  <span className="accent">Konan Kouame Cedrick</span>
        </h1>
        <p className="hero-sub">
          Je suis Data Scientist / Ingénieur IA, titulaire d’une formation en mathématiques appliquées et data science.
          Je travaille sur le machine learning, le deep learning et le développement d’applications intelligentes.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-outline">
            Me contacter
          </a>
        </div>
      </div>

      <div className="hero-avatar">
        <img src={moi} alt="Photo de moi" className="avatar-photo" />
      </div>
    </section>
  );
};

export default Hero;

