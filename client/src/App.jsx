import { useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const EMAIL = "emanabdulsemed4398@gmail.com";

const GITHUB = "https://github.com/emanabd1";

const LINKEDIN =
  "https://www.linkedin.com/in/eman-abdulsemed-282056324/";

/* =========================
   ICONS
========================= */

function Icon({ children, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function CodeIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </Icon>
  );
}

function ArrowIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Icon>
  );
}

function MailIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </Icon>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="10" x2="8" y2="16" />
      <circle cx="8" cy="7.5" r=".7" fill="currentColor" />
      <path d="M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16" />
      <line x1="12" y1="10" x2="12" y2="16" />
    </Icon>
  );
}

function GithubIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M15 22v-3.5c0-1-.4-1.8-1-2.5 3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 5c.2-.5.7-2.2-.2-4.5 0 0-1.3-.4-4.3 1.7a14.8 14.8 0 0 0-7.6 0C4.2.1 2.9.5 2.9.5 2 2.8 2.5 4.5 2.7 5A5.5 5.5 0 0 0 1.2 9c0 5.4 3.5 6.6 6.8 7-.6.6-1 1.5-1 2.5V22" />
      <path d="M6.5 18.5c-2.5 1.2-3.5-1.2-3.5-1.2" />
    </Icon>
  );
}

function DownloadIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M12 3v12" />
      <polyline points="7 10 12 15 17 10" />
      <path d="M5 21h14" />
    </Icon>
  );
}

function SendIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </Icon>
  );
}

function MenuIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </Icon>
  );
}

function CloseIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </Icon>
  );
}

function SparkleIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
      <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15z" />
    </Icon>
  );
}

function DatabaseIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
    </Icon>
  );
}

function PaletteIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.3-3.5 2 2 0 0 1 1.3-3.5H18a3 3 0 0 0 3-3A8.9 8.9 0 0 0 12 3z" />
      <circle cx="7.5" cy="10" r=".8" fill="currentColor" />
      <circle cx="10" cy="7" r=".8" fill="currentColor" />
      <circle cx="14" cy="7" r=".8" fill="currentColor" />
    </Icon>
  );
}

function BotIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <rect x="5" y="7" width="14" height="12" rx="3" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <circle cx="12" cy="2.5" r="1" />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
      <path d="M9 16h6" />
    </Icon>
  );
}

/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    title: "Task Manager",
    category: "Full Stack",
    description:
      "A task management application for creating, organizing and tracking tasks.",
    tech: ["React", "Node.js", "MongoDB"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "Job Sphere",
    category: "Full Stack",
    description:
      "A job platform designed to connect users with opportunities through a clean and practical interface.",
    tech: ["React", "Node.js", "MongoDB"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "Bootcamp Management System",
    category: "Full Stack",
    description:
      "A management platform for bootcamp operations including users, sessions, attendance and tasks.",
    tech: ["React", "Express", "MongoDB"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "Role Based Management System",
    category: "Full Stack",
    description:
      "A system with role-based access and different permissions for different types of users.",
    tech: ["React", "Node.js", "MongoDB"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "RAG AI Chatbot",
    category: "AI",
    description:
      "An AI chatbot that retrieves relevant information from a knowledge base before generating answers.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "Color Palette",
    category: "Frontend",
    description:
      "A color palette application for exploring and working with different colors.",
    tech: ["React", "Vite", "JavaScript"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "Toggle Component",
    category: "Frontend",
    description:
      "A responsive interactive toggle component focused on clean UI and usability.",
    tech: ["React", "CSS"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "Social Proof Section",
    category: "UI/UX",
    description:
      "A responsive social proof interface designed with attention to hierarchy and visual balance.",
    tech: ["HTML", "CSS", "Responsive UI"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "To-Do App",
    category: "Frontend",
    description:
      "A simple productivity application for creating and managing daily tasks.",
    tech: ["React", "JavaScript", "CSS"],
    github: GITHUB,
    demo: "#",
  },
];

/* =========================
   CERTIFICATES
========================= */

const certificates = [
  {
    title: "Full-Stack Development",
    issuer: "CSEC",
    description:
      "Full-stack development training covering frontend and backend development.",
  },
  {
    title: "Data Literacy",
    issuer: "Certificate",
    description:
      "Training focused on understanding and working with data.",
  },
  {
    title: "AI Literacy",
    issuer: "Certificate",
    description:
      "Learning focused on artificial intelligence concepts and responsible AI use.",
  },
];

/* =========================
   UI/UX
========================= */

const uiux = [
  {
    title: "Daily UI 01–30",
    description:
      "A collection of daily interface design exercises exploring different UI patterns.",
    tool: "Figma",
  },
  {
    title: "UX Case Study",
    description:
      "A complete UX case study covering problem definition, research, wireframes, design and prototype.",
    tool: "Figma",
  },
  {
    title: "Wireframes",
    description:
      "Low-fidelity wireframes created to explore user flows and interface structure.",
    tool: "Figma",
  },
];

/* =========================
   APP
========================= */

function App() {
  const [activeTab, setActiveTab] = useState("projects");

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [chatOpen, setChatOpen] =
    useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Eman's portfolio assistant. Ask me about projects, skills, certificates, UI/UX work or development experience.",
    },
  ]);

  const [question, setQuestion] =
    useState("");

  const [sending, setSending] =
    useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactStatus, setContactStatus] =
    useState("");

  /* =========================
     NAVIGATION
  ========================= */

  const scrollTo = (id) => {
    const element =
      document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileMenu(false);
  };

  /* =========================
     AI CHAT
  ========================= */

  const sendMessage = async (e) => {
    e.preventDefault();

    if (
      !question.trim() ||
      sending
    ) {
      return;
    }

    const userMessage =
      question.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setQuestion("");
    setSending(true);

    try {
      console.log(
        "Sending message:",
        userMessage
      );

      const response = await fetch(
        `${API_URL}/chat`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data =
        await response.json();

      console.log(
        "Backend response:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to get response"
        );
      }

      /*
        IMPORTANT:
        Our backend returns:

        {
          success: true,
          reply: "..."
        }

        Therefore we read data.reply.
      */

      const assistantReply =
        data.reply ||
        data.answer ||
        data.response ||
        data.message;

      if (!assistantReply) {
        throw new Error(
          "Backend did not return a reply."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: assistantReply,
        },
      ]);
    } catch (error) {
      console.error(
        "CHAT ERROR:",
        error
      );

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "The AI assistant is currently unavailable. Please make sure the Node.js backend is running on port 5000.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  /* =========================
     CONTACT FORM
  ========================= */

  const sendContact = async (e) => {
    e.preventDefault();

    setContactStatus("");

    if (
      !contact.name ||
      !contact.email ||
      !contact.message
    ) {
      setContactStatus(
        "Please fill in all fields."
      );

      return;
    }

    try {
      const response =
        await fetch(
          `${API_URL}/contact`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              contact
            ),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Something went wrong."
        );
      }

      setContactStatus(
        "Message sent successfully!"
      );

      setContact({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "CONTACT ERROR:",
        error
      );

      setContactStatus(
        "Unable to send the message. Please make sure the backend is running."
      );
    }
  };

  return (
    <div className="app">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="background-effects">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="grid-background"></div>
      </div>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">
        <div className="container nav-inner">

          <button
            className="logo"
            onClick={() =>
              scrollTo("home")
            }
          >
            <span className="logo-mark">
              &lt;/&gt;
            </span>

            <span>
              Portfolio
            </span>
          </button>

          <nav
            className={`nav-links ${
              mobileMenu
                ? "open"
                : ""
            }`}
          >
            <button
              onClick={() =>
                scrollTo("home")
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollTo("about")
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollTo("work")
              }
            >
              Work
            </button>

            <button
              onClick={() =>
                scrollTo("skills")
              }
            >
              Skills
            </button>

            <button
              onClick={() =>
                scrollTo("contact")
              }
            >
              Contact
            </button>
          </nav>

          <div className="nav-actions">

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="icon-button"
              aria-label="Email"
            >
              <MailIcon size={19} />
            </a>

            <button
              className="menu-button"
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }
            >
              {mobileMenu ? (
                <CloseIcon size={23} />
              ) : (
                <MenuIcon size={23} />
              )}
            </button>

          </div>
        </div>
      </header>

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section
          id="home"
          className="hero section"
        >
          <div className="container hero-grid">

            <div className="hero-content">

              <div className="status">
                <span className="status-dot"></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <h1>
                Full Stack
                <span>
                  Developer.
                </span>
              </h1>

              <p className="hero-description">
                I build modern web
                applications,
                intelligent
                experiences and
                clean user
                interfaces using
                React, Node.js,
                MongoDB and modern
                development tools.
              </p>

              <div className="hero-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>UI/UX</span>
                <span>AI</span>
              </div>

              <div className="hero-buttons">

                <button
                  className="primary-button"
                  onClick={() =>
                    scrollTo("work")
                  }
                >
                  Explore My Work
                  <ArrowIcon
                    size={18}
                  />
                </button>

                <button
                  className="secondary-button"
                  onClick={() =>
                    scrollTo(
                      "contact"
                    )
                  }
                >
                  Contact Me
                </button>

              </div>

              <div className="hero-socials">

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon
                    size={18}
                  />
                  GitHub
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon
                    size={18}
                  />
                  LinkedIn
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                >
                  <MailIcon
                    size={18}
                  />
                  Email
                </a>

              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}

            <div className="hero-image-wrapper">

              <div className="hero-image-glow"></div>

              <div className="hero-image-card">

                <div className="image-placeholder">

                  <div className="placeholder-icon">
                    <CodeIcon
                      size={45}
                    />
                  </div>

                  <span>
                    YOUR IMAGE
                  </span>

                  <small>
                    Replace this
                    area with your
                    profile image
                  </small>

                </div>

                <div className="floating-card floating-card-one">
                  <CodeIcon
                    size={18}
                  />
                  <span>
                    Full Stack
                  </span>
                </div>

                <div className="floating-card floating-card-two">
                  <SparkleIcon
                    size={18}
                  />
                  <span>
                    AI / RAG
                  </span>
                </div>

              </div>
            </div>

          </div>

          <button
            className="scroll-indicator"
            onClick={() =>
              scrollTo("about")
            }
          >
            <span></span>
            Scroll to explore
          </button>
        </section>

        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="section about-section"
        >
          <div className="container">

            <div className="section-heading">

              <span className="eyebrow">
                ABOUT ME
              </span>

              <h2>
                Turning ideas
                into
                <span>
                  {" "}
                  digital
                  experiences.
                </span>
              </h2>

              <p>
                I'm a full-stack
                developer
                interested in
                building useful,
                modern and
                user-friendly
                digital products.
              </p>

            </div>

            <div className="about-grid">

              <div className="about-card main-about-card">

                <div className="card-number">
                  01
                </div>

                <h3>
                  Who I Am
                </h3>

                <p>
                  I enjoy working
                  across both
                  frontend and
                  backend
                  development.
                  My projects
                  combine
                  software
                  engineering,
                  UI/UX design and
                  emerging AI
                  technologies.
                </p>

                <p>
                  I focus on
                  creating
                  interfaces that
                  are simple to
                  understand while
                  building reliable
                  systems behind
                  them.
                </p>

                <a
                  href="http://localhost:5000/cv/cv.pdf"
                  className="download-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <DownloadIcon
                    size={17}
                  />
                  Download CV
                </a>

              </div>

              <div className="about-card">

                <CodeIcon
                  size={27}
                />

                <h3>
                  Development
                </h3>

                <p>
                  React, Vite,
                  JavaScript,
                  Node.js, Express
                  and MongoDB.
                </p>

              </div>

              <div className="about-card">

                <PaletteIcon
                  size={27}
                />

                <h3>
                  UI/UX
                </h3>

                <p>
                  Figma,
                  wireframes,
                  prototypes, UX
                  case studies and
                  interface design.
                </p>

              </div>

              <div className="about-card">

                <SparkleIcon
                  size={27}
                />

                <h3>
                  AI
                </h3>

                <p>
                  RAG applications,
                  AI-assisted
                  development and
                  intelligent user
                  experiences.
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* =========================
            WORK
        ========================= */}

        <section
          id="work"
          className="section work-section"
        >
          <div className="container">

            <div className="section-heading work-heading">

              <div>
                <span className="eyebrow">
                  PORTFOLIO
                </span>

                <h2>
                  Selected
                  <span>
                    {" "}
                    work.
                  </span>
                </h2>
              </div>

              <p>
                A collection of
                development
                projects,
                certificates and
                design work.
              </p>

            </div>

            <div className="tabs">

              <button
                className={
                  activeTab ===
                  "projects"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab(
                    "projects"
                  )
                }
              >
                Projects
              </button>

              <button
                className={
                  activeTab ===
                  "certificates"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab(
                    "certificates"
                  )
                }
              >
                Certificates
              </button>

              <button
                className={
                  activeTab ===
                  "uiux"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab(
                    "uiux"
                  )
                }
              >
                UI/UX Work
              </button>

            </div>

            {/* PROJECTS */}

            {activeTab ===
              "projects" && (
              <div className="projects-grid">

                {projects.map(
                  (
                    project,
                    index
                  ) => (
                    <article
                      className="project-card"
                      key={
                        project.title
                      }
                    >

                      <div className="project-preview">

                        <div className="preview-number">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </div>

                        <div className="preview-code">
                          &lt;project /&gt;
                        </div>

                        <div className="preview-glow"></div>

                        <span className="project-category">
                          {
                            project.category
                          }
                        </span>

                      </div>

                      <div className="project-content">

                        <div className="project-title-row">

                          <h3>
                            {
                              project.title
                            }
                          </h3>

                          <a
                            href={
                              project.github
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="project-arrow"
                          >
                            <ArrowIcon
                              size={18}
                            />
                          </a>

                        </div>

                        <p>
                          {
                            project.description
                          }
                        </p>

                        <div className="tech-list">

                          {project.tech.map(
                            (
                              technology
                            ) => (
                              <span
                                key={
                                  technology
                                }
                              >
                                {
                                  technology
                                }
                              </span>
                            )
                          )}

                        </div>

                        <div className="project-links">

                          <a
                            href={
                              project.github
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GithubIcon
                              size={16}
                            />
                            Code
                          </a>

                          <a
                            href={
                              project.demo
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ArrowIcon
                              size={16}
                            />
                            Live Demo
                          </a>

                        </div>
                      </div>

                    </article>
                  )
                )}

              </div>
            )}

            {/* CERTIFICATES */}

            {activeTab ===
              "certificates" && (
              <div className="certificates-grid">

                {certificates.map(
                  (
                    certificate,
                    index
                  ) => (
                    <article
                      className="certificate-card"
                      key={
                        certificate.title
                      }
                    >

                      <div className="certificate-image">

                        <div className="certificate-placeholder">

                          <span>
                            YOUR
                            CERTIFICATE
                          </span>

                          <small>
                            Certificate
                            image{" "}
                            {index + 1}
                          </small>

                        </div>

                      </div>

                      <div className="certificate-content">

                        <span className="certificate-number">
                          0{index + 1}
                        </span>

                        <h3>
                          {
                            certificate.title
                          }
                        </h3>

                        <p className="issuer">
                          {
                            certificate.issuer
                          }
                        </p>

                        <p>
                          {
                            certificate.description
                          }
                        </p>

                      </div>

                    </article>
                  )
                )}

              </div>
            )}

            {/* UI/UX */}

            {activeTab ===
              "uiux" && (
              <div className="uiux-grid">

                {uiux.map(
                  (
                    item,
                    index
                  ) => (
                    <article
                      className="uiux-card"
                      key={
                        item.title
                      }
                    >

                      <div className="uiux-preview">

                        <span>
                          0{index + 1}
                        </span>

                        <div className="wireframe-lines">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>

                      </div>

                      <div className="uiux-content">

                        <div>

                          <span className="eyebrow">
                            {
                              item.tool
                            }
                          </span>

                          <h3>
                            {
                              item.title
                            }
                          </h3>

                          <p>
                            {
                              item.description
                            }
                          </p>

                        </div>

                        <button className="circle-arrow">
                          <ArrowIcon
                            size={20}
                          />
                        </button>

                      </div>

                    </article>
                  )
                )}

              </div>
            )}

          </div>
        </section>

        {/* =========================
            SKILLS
        ========================= */}

        <section
          id="skills"
          className="section skills-section"
        >
          <div className="container">

            <div className="section-heading centered">

              <span className="eyebrow">
                TECHNOLOGIES
              </span>

              <h2>
                Tools I
                <span>
                  {" "}
                  work with.
                </span>
              </h2>

              <p>
                Technologies and
                tools I use to turn
                ideas into working
                products.
              </p>

            </div>

            <div className="skills-grid">

              <div className="skill-card">

                <CodeIcon
                  size={28}
                />

                <h3>
                  Frontend
                </h3>

                <div className="skill-items">
                  <span>
                    React
                  </span>
                  <span>
                    Vite
                  </span>
                  <span>
                    JavaScript
                  </span>
                  <span>
                    HTML
                  </span>
                  <span>
                    CSS
                  </span>
                  <span>
                    Responsive
                    Design
                  </span>
                </div>

              </div>

              <div className="skill-card">

                <DatabaseIcon
                  size={28}
                />

                <h3>
                  Backend
                </h3>

                <div className="skill-items">
                  <span>
                    Node.js
                  </span>
                  <span>
                    Express
                  </span>
                  <span>
                    MongoDB
                  </span>
                  <span>
                    Mongoose
                  </span>
                  <span>
                    REST APIs
                  </span>
                  <span>
                    JWT
                  </span>
                </div>

              </div>

              <div className="skill-card">

                <PaletteIcon
                  size={28}
                />

                <h3>
                  Design
                </h3>

                <div className="skill-items">
                  <span>
                    Figma
                  </span>
                  <span>
                    Wireframes
                  </span>
                  <span>
                    Prototypes
                  </span>
                  <span>
                    UX Research
                  </span>
                  <span>
                    UI Design
                  </span>
                  <span>
                    Daily UI
                  </span>
                </div>

              </div>

              <div className="skill-card">

                <SparkleIcon
                  size={28}
                />

                <h3>
                  AI
                </h3>

                <div className="skill-items">
                  <span>
                    RAG
                  </span>
                  <span>
                    AI Chatbots
                  </span>
                  <span>
                    Prompt
                    Engineering
                  </span>
                  <span>
                    AI APIs
                  </span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="container contact-grid">

            <div className="contact-info">

              <span className="eyebrow">
                CONTACT ME
              </span>

              <h2>
                Let's build
                something
                <span>
                  {" "}
                  meaningful.
                </span>
              </h2>

              <p>
                Have a project,
                opportunity or
                idea? Send me a
                message and let's
                talk.
              </p>

              <div className="contact-links">

                <a
                  href={`mailto:${EMAIL}`}
                >
                  <MailIcon
                    size={20}
                  />

                  <span>
                    {EMAIL}
                  </span>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon
                    size={20}
                  />

                  <span>
                    github.com/emanabd1
                  </span>
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon
                    size={20}
                  />

                  <span>
                    LinkedIn
                  </span>
                </a>

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={sendContact}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={
                    contact.name
                  }
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      name: e.target.value,
                    })
                  }
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={
                    contact.email
                  }
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      email:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={
                    contact.message
                  }
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      message:
                        e.target.value,
                    })
                  }
                />

              </div>

              {contactStatus && (
                <div className="form-status">
                  {contactStatus}
                </div>
              )}

              <button
                type="submit"
                className="primary-button submit-button"
              >
                Send Message
                <SendIcon
                  size={17}
                />
              </button>

            </form>

          </div>
        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="container footer-inner">

          <div>

            <div className="logo">

              <span className="logo-mark">
                &lt;/&gt;
              </span>

              <span>
                Portfolio
              </span>

            </div>

            <p>
              Building digital
              experiences with
              code, design and AI.
            </p>

          </div>

          <div className="footer-socials">

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon
                size={19}
              />
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon
                size={19}
              />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
            >
              <MailIcon
                size={19}
              />
            </a>

          </div>

          <span className="copyright">
            © 2026 All rights
            reserved.
          </span>

        </div>

      </footer>

      {/* =========================
          AI CHAT BUTTON
      ========================= */}

      <button
        className={`chat-button ${
          chatOpen
            ? "active"
            : ""
        }`}
        onClick={() =>
          setChatOpen(
            !chatOpen
          )
        }
        aria-label="Open AI assistant"
      >
        {chatOpen ? (
          <CloseIcon
            size={23}
          />
        ) : (
          <BotIcon
            size={23}
          />
        )}
      </button>

      {/* =========================
          AI CHAT WINDOW
      ========================= */}

      {chatOpen && (
        <div className="chat-window">

          <div className="chat-header">

            <div className="chat-title">

              <div className="chat-icon">
                <BotIcon
                  size={19}
                />
              </div>

              <div>

                <strong>
                  Ask About Me
                </strong>

                <span>
                  AI Portfolio
                  Assistant
                </span>

              </div>

            </div>

            <button
              onClick={() =>
                setChatOpen(false)
              }
              className="chat-close"
              type="button"
            >
              <CloseIcon
                size={18}
              />
            </button>

          </div>

          <div className="chat-messages">

            {messages.map(
              (
                message,
                index
              ) => (
                <div
                  key={index}
                  className={`message ${
                    message.role ===
                    "user"
                      ? "message-user"
                      : "message-assistant"
                  }`}
                >
                  {
                    message.content
                  }
                </div>
              )
            )}

            {sending && (
              <div className="message message-assistant typing">
                Thinking...
              </div>
            )}

          </div>

          <form
            className="chat-form"
            onSubmit={
              sendMessage
            }
          >

            <input
              type="text"
              placeholder="Ask me something..."
              value={
                question
              }
              onChange={(e) =>
                setQuestion(
                  e.target.value
                )
              }
              disabled={
                sending
              }
            />

            <button
              type="submit"
              disabled={
                sending ||
                !question.trim()
              }
              aria-label="Send"
            >
              <SendIcon
                size={17}
              />
            </button>

          </form>

        </div>
      )}
    </div>
  );
}

export default App;