// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} cedrick konan- Co-Fondateur d'Eliort. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="https://github.com/petterbouki" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/cedric-konan-5863b7300" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
