import React from "react";
import "./App.css";
import profilbild from "./assets/profilbild.jpg";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDownload } from "react-icons/fa";

const experiences = [
  {
    title: "Bachelor of Science in Software Engineering",
    school: "Universität Stuttgart, Stuttgart-Vaihingen",
    date: "10/2022 – heute",
  },
  {
    title: "Allgemeine Hochschulreife (Abitur, berufliches Gymnasium)",
    school: "ProGenius Stuttgart & Mathilde-Planck-Schule Ludwigsburg",
    date: "09/2019 – 07/2022",
  },
  {
    title: "Mittlere Reife",
    school: "Gemeinschaftsschule Schwieberdingen-Hemmingen",
    date: "08/2011 – 07/2019",
  },
  {
    title: "Grundschule",
    school: "Grundschule am Berg, Schwieberdingen",
    date: "08/2008 – 07/2011",
  },
];

const projects = [
  {
    name: "Einkaufslisten-Generator",
    desc: "Web-App für Rezept- und Einkaufsplanung",
  },
  {
    name: "Bibliotheksverwaltung",
    desc: "Konsolenanwendung zur Verwaltung von Büchern",
  },
  {
    name: "ToDo & Assignee Web-App",
    desc: "Aufgabenmanagement im Browser",
  },
];

const skills = [
  "Java", "SQL", "Docker", "Git", "Maven", "Spring Boot", "HTML/CSS",
  "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint",
  "Lernbereitschaft", "Kooperations- und Teamfähigkeit"
];

const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Türkisch", level: "Muttersprache" },
  { name: "Englisch", level: "Sehr gute Kenntnisse" },
  { name: "Spanisch", level: "Grundkenntnisse" },
  { name: "Arabisch", level: "Grundkenntnisse" },
];

function App() {
  return (
    <div className="dark-bg">
      {/* Navigation */}
      <nav className="portfolio-navbar">
        <span className="nav-logo">Portfolio.</span>
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">Über mich</a>
          <a href="#werdegang">Werdegang</a>
          <a href="#projects">Projekte</a>
          <a href="#skills">Skills</a>
          <a href="#languages">Sprachen</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-left">
          <h3 className="hero-role">SOFTWARE ENGINEERING STUDENT</h3>
          <h1>Semih Erden</h1>
          <p className="hero-desc">
            Student an der Universität Stuttgart <br />
            Leidenschaft für Entwicklung und Teamarbeit.
          </p>
          <div className="hero-btns">
            <a href="mailto:erden.semih1803@gmail.com" className="hero-btn hero-btn-primary">
              <FaEnvelope /> Kontakt
            </a>
            <a
  href={`${process.env.PUBLIC_URL}/lebenslauf_SemihErden.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn hero-btn-secondary"
>
  <FaDownload /> Lebenslauf
</a>
          </div>
          <div className="hero-socials">
            <a href="mailto:erden.semih1803@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/semihkilla" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="tel:+491732110883"><FaPhone /></a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-shape">
            <img src={profilbild} alt="Semih Erden" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section className="portfolio-section about-section" id="about">
        <h2>About <span className="purple-accent">Me</span></h2>
        <div className="about-me-box">
          <div className="about-me-imgbox">
            <img src={profilbild} alt="Semih Erden" className="about-me-img" />
          </div>
          <div>
            <p>
              Ich bin 23 Jahre alt und studiere Software Engineering an der Universität Stuttgart.<br />
              Während meines Studiums habe ich mehrere Softwareprojekte entwickelt, z.B. eine Einkaufslisten-App und ein Aufgabenverwaltungstool.<br />
              Ich eigne mir Wissen eigenständig an und liebe es, technische Probleme praktisch zu lösen.
            </p>
            <div className="about-contact-info">
              <div><FaMapMarkerAlt /> Peter-von-Koblenz Straße 6, 71701 Schwieberdingen</div>
              <div><FaEnvelope /> erden.semih1803@gmail.com</div>
              <div><FaPhone /> +49 173 2110883</div>
              <div><FaGithub /> github.com/semihkilla</div>
            </div>
          </div>
        </div>
      </section>

      {/* Werdegang */}
<section className="portfolio-section" id="werdegang">
  <h2>Werdegang</h2>
  <ul className="timeline">
  {experiences.map((exp, idx) => (
    <li className="timeline-item" key={idx}>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <span className="timeline-date">{exp.date}</span>
        <strong>{exp.title}</strong>
        <div>{exp.school}</div>
      </div>
    </li>
  ))}
</ul>

</section>


      {/* Projekte */}
      <section className="portfolio-section" id="projects">
        <h2>Projekte</h2>
        <div className="project-grid">
          {projects.map((p, idx) => (
            <div className="project-card" key={idx}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="portfolio-section" id="skills">
        <h2>Fähigkeiten & Kenntnisse</h2>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <span className="skill-chip" key={i}>{s}</span>
          ))}
        </div>
      </section>

      {/* Sprachen */}
      <section className="portfolio-section" id="languages">
        <h2>Sprachen</h2>
        <div className="languages-grid">
          {languages.map((l, i) => (
            <div className="language-card" key={i}>
              <span>{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section className="portfolio-section contact-section" id="contact">
        <h2>Kontakt</h2>
        <p>Du kannst mich gerne jederzeit per E-Mail oder per Telefon erreichen!</p>
        <div className="contact-btns">
          <a href="mailto:erden.semih1803@gmail.com" className="hero-btn hero-btn-primary">
            <FaEnvelope /> E-Mail senden
          </a>
          <a href="tel:+491732110883" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
            <FaPhone /> Anrufen
          </a>
        </div>
      </section>
      <footer>
        <span>&copy; {new Date().getFullYear()} Semih Erden</span>
      </footer>
    </div>
  );
}

export default App;
