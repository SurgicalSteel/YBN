import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Code2, ExternalLink, Code, GraduationCap, Mail, Menu, Network, Send, X } from "lucide-react";
import headshot from "/assets/Yuwono_Bangun_Nagoro.jpg";
import { experience, projects, skillGroups } from "./data/portfolio";
import "./index.css";

const navigation = [
  { id: "about", label: "About" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <button className="wordmark" onClick={() => goTo("about")} data-testid="button-home" aria-label="Back to top">
          <span className="wordmark-mark">YBN</span>
          <span className="wordmark-name">Yuwono Bangun Nagoro</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <button key={item.id} className={activeSection === item.id ? "nav-link active" : "nav-link"} onClick={() => goTo(item.id)} data-testid={`button-nav-${item.id}`}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <button key={item.id} className="mobile-nav-link" onClick={() => goTo(item.id)} data-testid={`button-mobile-nav-${item.id}`}>
              <span className="mono-index">0{index + 1}</span>{item.label}
            </button>
          ))}
        </nav>
      )}

      <div className="page-wrap">
        <section id="about" className="hero section-reveal">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for thoughtful problems</div>
            <h1>Backend systems<br /><em>with a point of view.</em></h1>
            <p className="hero-lede">I’m Yuwono — a senior backend engineer designing the quiet machinery behind Southeast Asia’s commerce platforms.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo("projects")} data-testid="button-view-projects">View selected work <ArrowUpRight size={16} /></button>
              <button className="text-link" onClick={() => goTo("contact")} data-testid="button-start-conversation">Start a conversation <span>↗</span></button>
            </div>
            <div className="hero-meta">
              <span><strong>08+</strong> years building</span>
              <span className="meta-divider" />
              <span><strong>05</strong> commerce teams</span>
              <span className="meta-divider" />
              <span><strong>01</strong> calm approach</span>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-backdrop" />
            <div className="portrait-frame">
              <img src={headshot} alt="Portrait of Yuwono Bangun Nagoro" data-testid="img-yuwono-headshot" />
              <span className="portrait-label mono">ID / 1993 — PRESENT</span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="floating-note note-top mono">01 / SYSTEMS THINKING</div>
            <div className="floating-note note-bottom mono">JAKARTA, IDN <span className="blue-line" /></div>
          </div>
          <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ChevronDown size={15} /></div>
        </section>

        <section className="statement section-reveal" aria-label="Professional summary">
          <span className="section-kicker mono">/ 00 — A SHORT VERSION</span>
          <div className="statement-copy">
            <p className="statement-lead">Good backend work is rarely loud.</p>
            <p>It is the handoff that never drops, the queue that drains before anyone notices, the API that gives a product room to grow. I like working at that level: close to the problem, precise about the trade-offs, and generous with the people who maintain what comes next.</p>
          </div>
        </section>

        <section id="capabilities" className="capabilities section-reveal">
          <SectionHeading index="01" title="Capabilities" detail="The tools are familiar. The judgment is earned." icon={<Code2 size={20} />} />
          <div className="skills-layout">
            <div className="skills-intro">
              <div className="big-index">01<span>/05</span></div>
              <p>From a clean service boundary to an honest dashboard, I care about the whole path a request takes.</p>
            </div>
            <div className="skills-list">
              {skillGroups.map((group, index) => (
                <div className="skill-row" key={group.label} data-testid={`skill-group-${index}`}>
                  <span className="skill-label mono">{group.label}</span>
                  <div className="skill-items">{group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-reveal">
          <SectionHeading index="02" title="Experience" detail="A timeline of shipping, learning, and raising the bar." icon={<BriefcaseBusiness size={20} />} />
          <div className="timeline">
            {experience.map((role, index) => (
              <article className={`timeline-item ""}`} key={`${role.company}-${role.dates}`} data-testid={`experience-${index}`}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-date mono">{role.dates}</div>
                <div className="timeline-content">
                  <div className="role-topline"><h3>{role.company}</h3><span className="role-number mono">0{experience.length - index}</span></div>
                  <p className="role-title">{role.role}</p>
                  <p className="role-summary">{role.summary}</p>
                  <div className="highlight-list">{role.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-reveal">
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={24} /></div>
            <div><span className="section-kicker mono">03 — EDUCATION</span><h2>Computer Science,<br /><em>with curiosity.</em></h2></div>
            <div className="education-details"><strong>B.Sc. Computer Science</strong><span>Telkom University</span><span className="mono">SEP 2011 — JUL 2016</span></div>
            <div className="gpa"><span className="mono">GPA</span><strong>3.39</strong><span className="mono">/ 4.00</span></div>
          </div>
        </section>

        <section id="projects" className="projects section-reveal">
          <SectionHeading index="04" title="Selected projects" detail="A few directions I keep coming back to." icon={<Network size={20} />} />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.name} data-testid={`link-project-${index}`}>
                <div className="project-card-top"><span className="mono">0{index + 1}</span><ExternalLink size={17} /></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-arrow"><ArrowUpRight size={20} /></div>
              </a>
            ))}
          </div>
          <a className="github-link" href="https://github.com/SurgicalSteel" target="_blank" rel="noreferrer" data-testid="link-github"><Code size={17} /> See more on GitHub <ArrowUpRight size={15} /></a>
        </section>

        <section id="contact" className="contact section-reveal">
          <div className="contact-visual">
            <span className="section-kicker mono">05 — CONTACT</span>
            <h2>Have a system<br /><em>worth building?</em></h2>
            <p>The best conversations start with a real problem, not a polished brief.</p>
            <div className="contact-mark" aria-hidden="true"><span>YBN</span><i /></div>
          </div>
          <div className="contact-panel">
            <div className="contact-panel-label mono">DIRECT LINE <span /></div>
            <p className="contact-note">This opens your email client with a subject and a small head start already written.</p>
            <a className="email-cta" href="mailto:bangunnagoro@outlook.com?subject=Let's%20talk%20about%20a%20backend%20problem&body=Hi%20Yuwono%2C%0A%0AI'd%20like%20to%20talk%20about..." data-testid="link-email"><Mail size={19} /><span>bangunnagoro<br /><b>@outlook.com</b></span><Send size={17} /></a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/bangunnagoro" target="_blank" rel="noreferrer" data-testid="link-linkedin">LinkedIn <ArrowUpRight size={14} /></a>
              <a href="https://github.com/SurgicalSteel" target="_blank" rel="noreferrer" data-testid="link-contact-github">GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <span className="mono">YBN / 2026</span>
        <span>Built around useful constraints.</span>
        <button onClick={() => goTo("about")} data-testid="button-back-to-top">Back to top ↑</button>
      </footer>
    </main>
  );
}

function SectionHeading({ index, title, detail, icon }: { index: string; title: string; detail: string; icon: ReactNode }) {
  return (
    <div className="section-heading">
      <div className="heading-icon">{icon}</div>
      <div><span className="section-kicker mono">{index} — SECTION</span><h2>{title}</h2><p>{detail}</p></div>
    </div>
  );
}

export default App;