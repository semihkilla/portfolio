import React from "react";
import "./App.css";
import profilbild from "./assets/profilbild.jpg";
import {
  FaArrowDown,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const education = [
  {
    degree: "B.Sc. Wirtschaftsinformatik",
    institution: "Universität Stuttgart",
    location: "Stuttgart",
    date: "Okt. 2025 – heute",
  },
  {
    degree: "B.Sc. Software Engineering",
    institution: "Universität Stuttgart",
    location: "Stuttgart",
    date: "Okt. 2022 – Sep. 2025",
  },
  {
    degree: "Allgemeine Hochschulreife",
    institution: "Mathilde-Planck-Schule",
    location: "Ludwigsburg",
    date: "Sep. 2020 – Juli 2022",
    detail: "Sozialwissenschaftliches Gymnasium",
  },
];

const workExperience = [
  {
    role: "Aushilfe an der Rezeption",
    company: "Almopraxis",
    location: "Korntal-Münchingen",
    date: "März 2026 – heute",
    bullets: [
      "Patientenempfang, Terminvergabe und Erfassung relevanter Informationen in der Praxissoftware",
      "Bearbeitung telefonischer und persönlicher Anliegen sowie Unterstützung organisatorischer Praxisabläufe",
      "Erste Analyse technischer Störungen und Koordination mit Software- und IT-Dienstleistern",
    ],
  },
  {
    role: "Praktika Fachinformatik für Systemintegration",
    company: "ITversum, ehem. Leis-IT",
    location: "Schwieberdingen",
    date: "Nov. 2017 / Juli 2018",
    bullets: [
      "Einrichtung von PCs und Peripheriegeräten sowie Einblicke in Router, Telefonanlagen und Drucker",
      "Unterstützung bei Wartungsarbeiten und Datensicherungen mit verschiedenen Systemen und Datenträgern",
    ],
  },
];

const projects = [
  {
    name: "TaskMaster",
    subtitle: "Todo- und Assignee-Verwaltung",
    stack: ["Vue 3", "Spring Boot", "MariaDB", "Docker"],
    description:
      "Full-Stack-Webanwendung mit REST-API, relationaler Datenbank, Aufgaben- und Bearbeiterzuordnung, Filterung, Suche sowie CSV-Import und -Export. Der vollständige Stack läuft über Docker Compose.",
  },
  {
    name: "Bibliotheksverwaltungssystem",
    subtitle: "Desktop-Anwendung mit Datenbankanbindung",
    stack: ["Java", "JavaFX", "PostgreSQL", "Maven"],
    description:
      "Verwaltung von Büchern, Exemplaren, Kunden und Ausleihen mit JDBC-Datenbankzugriff, Validierung, Gebührenlogik und automatisierten Tests.",
  },
  {
    name: "Rezept- und Einkaufslistenplattform",
    subtitle: "Universitäres Softwarepraktikum",
    stack: ["Webentwicklung", "Datenbank", "Serverbetrieb"],
    description:
      "Webbasierte Anwendung zur Verwaltung von Rezepten und Einkaufslisten. Entwickelt im Team und auf einem eigenen Server betrieben.",
  },
  {
    name: "Uni- und Arbeitszeit-Tracker",
    subtitle: "Mobile Web-App für Studium und Arbeit",
    stack: ["React", "JavaScript", "Vite"],
    description:
      "ICS-Stundenplanimport, Arbeitszeiterfassung, Prüfungstermine, Notenverwaltung, Konflikterkennung und lokale Datenpersistenz in einer kompakten mobilen Anwendung.",
  },
];

const skillGroups = [
  {
    title: "Programmiersprachen",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "Python · Grundlagen"],
  },
  {
    title: "Frameworks & Backend",
    skills: ["React", "Vue.js", "Spring Boot", "JavaFX", "Vite", "REST-APIs"],
  },
  {
    title: "Daten & Entwicklung",
    skills: ["PostgreSQL", "MariaDB", "Supabase", "Git", "Docker", "Docker Compose", "Maven", "npm"],
  },
  {
    title: "Systeme & Infrastruktur",
    skills: ["Windows", "Linux", "macOS", "PowerShell · Grundlagen", "IT-Support", "Troubleshooting", "LAN/WLAN", "VPN"],
  },
];

const languages = [
  { name: "Deutsch", level: "Muttersprache", value: "DE" },
  { name: "Türkisch", level: "Muttersprache", value: "TR" },
  { name: "Englisch", level: "B2", value: "B2" },
  { name: "Spanisch", level: "A2", value: "A2" },
  { name: "Arabisch", level: "A1", value: "A1" },
];

function LegalLayout({ title, eyebrow, children }) {
  const portfolioUrl = process.env.PUBLIC_URL || "/";

  return (
    <div className="site-shell legal-shell">
      <header className="site-header">
        <a className="wordmark" href={portfolioUrl} aria-label="Zur Portfolio-Startseite">
          SE<span>.</span>
        </a>
        <a className="legal-back-link" href={portfolioUrl}>← Zurück zum Portfolio</a>
      </header>
      <main className="legal-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="legal-content">{children}</div>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Semih Erden</span>
        <div className="footer-links">
          <a href="?page=impressum">Impressum</a>
          <a href="?page=datenschutz">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}

function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" eyebrow="Rechtliche Angaben">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address>
          Semih Erden<br />
          Peter-von-Koblenz Straße 6<br />
          71701 Schwieberdingen<br />
          Deutschland
        </address>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+491732110883">+49 173 2110883</a><br />
          E-Mail: <a href="mailto:erden.semih1803@gmail.com">erden.semih1803@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}

function PrivacyPage() {
  return (
    <LegalLayout title="Datenschutz" eyebrow="Datenschutzerklärung">
      <section>
        <h2>1. Verantwortlicher</h2>
        <address>
          Semih Erden<br />
          Peter-von-Koblenz Straße 6<br />
          71701 Schwieberdingen<br />
          Deutschland<br /><br />
          E-Mail: <a href="mailto:erden.semih1803@gmail.com">erden.semih1803@gmail.com</a>
        </address>
      </section>

      <section>
        <h2>2. Hosting über GitHub Pages</h2>
        <p>
          Diese Website wird über GitHub Pages bereitgestellt, einen Dienst von GitHub. Beim
          Aufruf einer GitHub-Pages-Website wird die IP-Adresse des Besuchers aus Sicherheitsgründen
          durch GitHub protokolliert und gespeichert. Die Verarbeitung ist für die sichere und
          zuverlässige Bereitstellung der Website erforderlich und erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Weitere Informationen stellt GitHub in seiner{
          " "}<a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>{
          " "}und in den{
          " "}<a href="https://docs.github.com/de/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" target="_blank" rel="noopener noreferrer">Hinweisen zur Datenerhebung bei GitHub Pages</a>{
          " "}bereit. Eine Verarbeitung von Daten in den USA kann nicht ausgeschlossen werden.
        </p>
      </section>

      <section>
        <h2>3. Kontaktaufnahme</h2>
        <p>
          Bei einer Kontaktaufnahme per E-Mail oder Telefon werden die mitgeteilten Daten nur zur
          Bearbeitung der Anfrage verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern
          die Anfrage auf eine mögliche Zusammenarbeit gerichtet ist, andernfalls Art. 6 Abs. 1
          lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <h2>4. Cookies, Analyse und Schriftarten</h2>
        <p>
          Diese Website setzt selbst keine Cookies ein und verwendet keine Analyse- oder
          Trackingdienste. Die verwendeten Schriftarten werden ausschließlich über das Gerät des
          Besuchers bereitgestellt; beim Laden der Website wird deshalb keine Verbindung zu einem
          externen Schriftanbieter aufgebaut.
        </p>
      </section>

      <section>
        <h2>5. Rechte betroffener Personen</h2>
        <p>
          Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das
          Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Außerdem besteht ein Beschwerderecht bei einer
          Datenschutzaufsichtsbehörde. Zuständig ist insbesondere der{
          " "}<a href="https://www.baden-wuerttemberg.datenschutz.de/" target="_blank" rel="noopener noreferrer">Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</a>.
        </p>
      </section>

      <p className="legal-date">Stand: August 2026</p>
    </LegalLayout>
  );
}

/** Renders Semih Erden's personal portfolio and CV. */
function App() {
  const currentPage = new URLSearchParams(window.location.search).get("page");

  if (currentPage === "impressum") {
    return <ImpressumPage />;
  }

  if (currentPage === "datenschutz") {
    return <PrivacyPage />;
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Zur Startseite">
          SE<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="#about">Profil</a>
          <a href="#experience">Erfahrung</a>
          <a href="#projects">Projekte</a>
          <a href="#skills">Kenntnisse</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Wirtschaftsinformatik · Softwareentwicklung</p>
            <h1>
              Hallo, ich bin <span>Semih.</span>
            </h1>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Projekte ansehen <FaArrowDown aria-hidden="true" />
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/lebenslauf_SemihErden.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Lebenslauf <FaDownload aria-hidden="true" />
              </a>
            </div>
            <div className="hero-meta">
              <span><FaMapMarkerAlt aria-hidden="true" /> Schwieberdingen</span>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src={profilbild} alt="Porträt von Semih Erden" />
            </div>
          </div>
        </section>

        <section className="section intro-section" id="about">
          <div className="section-label">01 / Profil</div>
          <div className="intro-copy">
            <h2>Technik verstehen.<br />Lösungen umsetzen.</h2>
            <p>
              Als Student der Wirtschaftsinformatik an der Universität Stuttgart bringe ich
              Erfahrung aus Full-Stack-Webentwicklung, Desktop-Anwendungen und IT-Support mit.
              Besonders gern arbeite ich mich strukturiert in neue Systeme ein und überführe
              Anforderungen in verlässliche, nachvollziehbare Lösungen.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <div>
              <div className="section-label">02 / Laufbahn</div>
              <h2>Erfahrung & Bildung</h2>
            </div>
            <p>Praxisnahes Arbeiten trifft auf ein interdisziplinäres Studium.</p>
          </div>

          <div className="career-layout">
            <div className="career-column">
              <h3>Praktische Erfahrung</h3>
              {workExperience.map((item) => (
                <article className="career-item" key={`${item.company}-${item.date}`}>
                  <time>{item.date}</time>
                  <h4>{item.role}</h4>
                  <p className="institution">{item.company} · {item.location}</p>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <div className="career-column education-column">
              <h3>Bildungsweg</h3>
              {education.map((item) => (
                <article className="career-item" key={`${item.degree}-${item.date}`}>
                  <time>{item.date}</time>
                  <h4>{item.degree}</h4>
                  <p className="institution">{item.institution} · {item.location}</p>
                  {item.detail && <p className="career-detail">{item.detail}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-label">03 / Projekte</div>
              <h2>Ausgewählte Arbeiten</h2>
            </div>
            <p>Von der Oberfläche bis zur Datenbank – vollständig gedacht und umgesetzt.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name}>
                <span className="project-number">0{index + 1}</span>
                <div className="project-title">
                  <h3>{project.name}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-list" aria-label={`Technologien für ${project.name}`}>
                  {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <div>
              <div className="section-label">04 / Werkzeugkasten</div>
              <h2>IT- & Softwarekenntnisse</h2>
            </div>
          </div>
          <div className="skills-layout">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="language-section" id="languages">
            <h3>Sprachen</h3>
            <div className="language-list">
              {languages.map((language) => (
                <div className="language-item" key={language.name}>
                  <span>{language.name}</span>
                  <strong>{language.level}</strong>
                  <span className="language-code" aria-hidden="true">{language.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Kontakt</h2>
          <a className="contact-mail" href="mailto:erden.semih1803@gmail.com">
            erden.semih1803@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-links">
            <a href="tel:+491732110883"><FaPhone aria-hidden="true" /> +49 173 2110883</a>
            <a href="https://github.com/semihkilla" target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a href="mailto:erden.semih1803@gmail.com"><FaEnvelope aria-hidden="true" /> E-Mail</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Semih Erden</span>
        <div className="footer-links">
          <a href="?page=impressum">Impressum</a>
          <a href="?page=datenschutz">Datenschutz</a>
          <a href="#home">Nach oben ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
