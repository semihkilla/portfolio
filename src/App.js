import React from "react";
import "./App.css";
import profilbild from "./assets/profilbild.jpg";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

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
    <div className="main-bg">
      <nav className="navbar glassy">
        <span className="logo">Semih Erden</span>
        <div className="nav-links">
          <a href="#about">Über mich</a>
          <a href="#exp">Werdegang</a>
          <a href="#projects">Projekte</a>
          <a href="#skills">Skills</a>
          <a href="#languages">Sprachen</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>

      {/* Headercard */}
      <section className="header-card" id="about">
        <img src={profilbild} alt="Semih Erden" className="profilbild" />
        <div className="header-content">
          <h1>Semih Erden</h1>
          <p className="job-title">
            Software Engineering Student <br />
            Universität Stuttgart
          </p>
          <div className="contact-list">
            <span><FaEnvelope /> <a href="mailto:erden.semih1803@gmail.com">erden.semih1803@gmail.com</a></span>
            <span><FaPhone /> <a href="tel:+491732110883">+49 173 2110883</a></span>
            <span><FaMapMarkerAlt /> Peter-von-Koblenz Straße 6, 71701 Schwieberdingen</span>
            <span><FaGithub /> <a href="https://github.com/semihkilla" target="_blank" rel="noopener noreferrer">github.com/semihkilla</a></span>
          </div>
        </div>
      </section>

      {/* Profil-Text */}
      <section className="section profile-box">
        <h2>Profil</h2>
        <p>
          Ich bin Semih Erden, 23 Jahre alt, und studiere Software Engineering an der Universität Stuttgart.
          Während des Studiums habe ich mehrere Softwareprojekte entwickelt, zum Beispiel eine Einkaufslisten-Anwendung und ein Aufgabenverwaltungstool.
          Ich möchte meine Fähigkeiten in der Softwareentwicklung weiter vertiefen und suche eine Möglichkeit, praktische Erfahrungen zu sammeln und Verantwortung zu übernehmen.
        </p>
      </section>

      {/* Werdegang */}
      <section id="exp" className="section">
        <h2>Bildungsweg</h2>
        <ul className="timeline-modern">
          {experiences.map((exp, idx) => (
            <li className="timeline-modern-item" key={idx}>
              <div className="timeline-modern-date">{exp.date}</div>
              <div>
                <strong>{exp.title}</strong>
                <div>{exp.school}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Projekte */}
      <section id="projects" className="section">
        <h2>Projekte</h2>
        <div className="projects">
          {projects.map((p, idx) => (
            <div className="project-card modern-card" key={idx}>
              <div className="project-title">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Fähigkeiten & Kenntnisse</h2>
        <div className="skills">
          {skills.map((s, i) => (
            <span className="skill-badge modern-badge" key={i}>{s}</span>
          ))}
        </div>
      </section>

      {/* Sprachen */}
      <section id="languages" className="section">
        <h2>Sprachen</h2>
        <div className="langs">
          {languages.map((l, i) => (
            <div className="lang-item modern-card" key={i}>
              <span>{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interessen */}
      <section className="section">
        <h2>Interessen & Hobbys</h2>
        <div className="profile-hobbies">
          <p>
            Programmieren, Basketball, Gaming.<br />
            Großes Interesse an aktuellen Technikthemen und digitalen Trends.
            Begeisterung für eigenständige Recherche und selbstständiges Aneignen von neuem Wissen.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="section contact-section">
        <h2>Kontakt</h2>
        <p>Du kannst mich gerne jederzeit per E-Mail oder GitHub erreichen!</p>
        <div className="contact-buttons">
          <a className="contact-btn" href="mailto:erden.semih1803@gmail.com"><FaEnvelope /> E-Mail senden</a>
          <a className="contact-btn" href="https://github.com/semihkilla" target="_blank" rel="noopener noreferrer"><FaGithub /> Zum GitHub</a>
        </div>
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Semih Erden</span>
      </footer>
    </div>
  );
}

export default App;
