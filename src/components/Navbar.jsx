// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <header className="navbar glass-blur">
      <div className="logo">Cedric Konan</div>
      <nav>
        <a href="#hero">Accueil</a>
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
