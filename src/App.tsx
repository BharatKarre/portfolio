
import {
    Mail,
    ArrowUpRight,
    Code2,
    Database,
    BriefcaseBusiness,
    Menu,
    X
} from "lucide-react";

import { useState } from "react";
import { portfolio } from "./data/portfolio";
import "./App.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Contact"
    ];

    const scrollTo = (section: string) => {
        document.getElementById(section.toLowerCase())?.scrollIntoView({
            behavior: "smooth"
        });
        setMenuOpen(false);
    };

    return (
        <>
            <header className="navbar">
                <a href="#home" className="logo">
                    DEV<span>.</span>PORTFOLIO
                </a>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

                <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                    {navigation.map((item) => (
                        <button key={item} onClick={() => scrollTo(item)}>
                            {item}
                        </button>
                    ))}
                </nav>

                <a href="#contact" className="nav-cta">
                    Let's Talk <ArrowUpRight size={16} />
                </a>
            </header>

            <main>
                {/* HERO */}
                <section id="home" className="hero section">
                    <div className="hero-content">
                        <div className="availability">
                            <span className="status-dot" />
                            SOFTWARE DEVELOPER
                        </div>

                        <p className="eyebrow">HELLO, I'M {portfolio.name}</p>

                        <h1>
                            Building scalable
                            <br />
                            solutions with
                            <br />
                            <span>.NET & Modern Tech.</span>
                        </h1>

                        <p className="hero-description">
                            {portfolio.tagline}
                            <br />
                            Specialized in backend engineering,
                            API development and database systems.
                        </p>

                        <div className="hero-actions">
                            <button
                                className="primary-btn"
                                onClick={() => scrollTo("projects")}
                            >
                                Explore My Work <ArrowUpRight size={18} />
                            </button>

                            <a href="#contact" className="secondary-btn">
                                Contact Me <Mail size={17} />
                            </a>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div className="code-card">
                            <div className="code-header">
                                <span>developer.cs</span>
                                <span>● ● ●</span>
                            </div>
                            <pre>
                                <code>
                                    {`public class Developer
{
    public string Role =>
        "Software Engineer";

    public string[] Skills =>
    [
        "C#",
        ".NET",
        "ASP.NET Core",
        "MongoDB",
        "React"
    ];

    public string Mindset =>
        "Always Learning";
}`}
                                </code>
                            </pre>
                        </div>
                        <div className="experience-card">
                            <strong>{portfolio.experience}</strong>
                            <span>Years of experience</span>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="section">
                    <div className="section-heading">
                        <p className="eyebrow">01 / ABOUT ME</p>
                        <h2>Turning ideas into <span>solutions.</span></h2>
                    </div>

                    <div className="about-content">
                        <p>{portfolio.about}</p>

                        <div className="stats">
                            <div>
                                <strong>5+</strong>
                                <span>Years Experience</span>
                            </div>
                            <div>
                                <strong>C#</strong>
                                <span>Core Expertise</span>
                            </div>
                            <div>
                                <strong>API</strong>
                                <span>Backend Development</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="section">
                    <div className="section-heading">
                        <p className="eyebrow">02 / TECHNICAL SKILLS</p>
                        <h2>My technical <span>toolkit.</span></h2>
                    </div>

                    <div className="skills-grid">
                        {portfolio.skills.map((skill) => (
                            <div className="skill-card" key={skill.name}>
                                <Code2 size={20} />
                                <div>
                                    <strong>{skill.name}</strong>
                                    <span>{skill.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="section">
                    <div className="section-heading">
                        <p className="eyebrow">03 / EXPERIENCE</p>
                        <h2>My professional <span>journey.</span></h2>
                    </div>

                    <div className="timeline">
                        {portfolio.experiences.map((job) => (
                            <article className="timeline-card" key={job.company}>
                                <BriefcaseBusiness size={24} />
                                <div>
                                    <span className="timeline-date">{job.duration}</span>
                                    <h3>{job.role}</h3>
                                    <h4>{job.company}</h4>
                                    <p>{job.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="section">
                    <div className="section-heading">
                        <p className="eyebrow">04 / FEATURED WORK</p>
                        <h2>Projects I've <span>built.</span></h2>
                    </div>

                    <div className="projects-grid">
                        {portfolio.projects.map((project, index) => (
                            <article className="project-card" key={project.title}>
                                <div className="project-number">
                                    0{index + 1}
                                </div>

                                <Database size={30} />

                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="tech-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    View Project <ArrowUpRight size={18} />
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="section contact-section">
                    <p className="eyebrow">05 / GET IN TOUCH</p>
                    <h2>Have a project in mind?</h2>
                    <h2><span>Let's connect.</span></h2>

                    <p>
                        Interested in opportunities, collaboration
                        or discussing technology? Feel free to reach out.
                    </p>

                    <a
                        className="primary-btn"
                        href={`mailto:${portfolio.email}`}
                    >
                        Say Hello <Mail size={18} />
                    </a>

                    <p className="contact-email">{portfolio.email}</p>
                </section>
            </main>

            <footer className="footer">
                <span>© {new Date().getFullYear()} {portfolio.name}</span>
                <span>Designed & Built with React + TypeScript</span>
            </footer>
        </>
    );
}

export default App;