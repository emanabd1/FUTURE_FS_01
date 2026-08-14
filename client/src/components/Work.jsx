import { useEffect, useState } from "react";
import Icon from "./Icon";
import { certificates, uiux } from "../lib/data";
import { getProjects } from "../lib/api";

export default function Work() {
  const [t, setT] = useState("projects");

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectError, setProjectError] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoadingProjects(true);
        setProjectError("");

        const data = await getProjects();

        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Could not load projects:", error);
        setProjectError(
          error.message || "Could not load projects."
        );
      } finally {
        setLoadingProjects(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="work" className="section">
      <div className="container">

        {/* Heading */}
        <div className="heading workhead">
          <div>
            <small>PORTFOLIO</small>

            <h2>
              Selected <span>work.</span>
            </h2>
          </div>

          <p>
            A collection of development projects, certificates and design
            work.
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {[
            ["projects", "Projects"],
            ["certificates", "Certificates"],
            ["uiux", "UI/UX Work"],
          ].map(([id, label]) => (
            <button
              className={t === id ? "active" : ""}
              onClick={() => setT(id)}
              key={id}
            >
              {label}
            </button>
          ))}
        </div>

        {/* -------------------------------- */}
        {/* Projects */}
        {/* -------------------------------- */}

        {t === "projects" && (
          <>
            {loadingProjects && (
              <div className="form-status">
                Loading projects...
              </div>
            )}

            {!loadingProjects && projectError && (
              <div className="form-status">
                {projectError}
              </div>
            )}

            {!loadingProjects &&
              !projectError &&
              projects.length === 0 && (
                <div className="form-status">
                  No projects available.
                </div>
              )}

            {!loadingProjects &&
              !projectError &&
              projects.length > 0 && (
                <div className="cards">
                  {projects.map((p, i) => (
                    <article
                      className="project"
                      key={p._id || p.title}
                    >
                      <div className="preview">
                        <span>
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <b>&lt;project /&gt;</b>

                        <em>{p.category}</em>
                      </div>

                      <div className="content">
                        <div className="title">
                          <h3>{p.title}</h3>

                          {p.githubUrl && (
                            <a
                              href={p.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open ${p.title} on GitHub`}
                            >
                              <Icon name="arrow" />
                            </a>
                          )}
                        </div>

                        <p>{p.description}</p>

                        <div className="tags">
                          {p.stack?.map((technology) => (
                            <span key={technology}>
                              {technology}
                            </span>
                          ))}
                        </div>

                        {p.githubUrl && (
                          <a
                            className="code"
                            href={p.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="github" size={16} />
                            Code
                          </a>
                        )}

                        {p.liveUrl && (
                          <a
                            className="code"
                            href={p.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="arrow" size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
          </>
        )}

        {/* -------------------------------- */}
        {/* Certificates */}
        {/* -------------------------------- */}

        {t === "certificates" && (
          <div className="cards">
            {certificates.map((c) => (
              <article
                className="certificate"
                key={c.title}
              >
                <div className="cert-img">
                  <img
                    src={c.image}
                    alt={c.title}
                  />
                </div>

                <div className="content">
                  <small>{c.issuer}</small>

                  <h3>{c.title}</h3>

                  <p>
                    Certificate and training achievement.
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* -------------------------------- */}
        {/* UI/UX */}
        {/* -------------------------------- */}

        {t === "uiux" && (
          <div className="cards">
            {uiux.map((u, i) => (
              <article
                className="uiux"
                key={u.title}
              >
                <div className="wire">
                  <b>
                    0{i + 1}
                  </b>

                  <i />
                  <i />
                  <i />
                </div>

                <div className="content">
                  <small>{u.tool}</small>

                  <h3>{u.title}</h3>

                  <p>
                    Design work focused on user experience,
                    interface structure and visual design.
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}