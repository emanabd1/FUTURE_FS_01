import Icon from './Icon';
import { profile } from '../lib/data';

export default function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">

        {/* Hero Content */}
        <div>
          <div className="status">
            <i />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1>
            Full Stack <span>Developer.</span>
          </h1>

          <p>
            I build modern web applications, intelligent experiences and
            clean user interfaces using React, Node.js, MongoDB and modern
            development tools.
          </p>

          {/* Skills */}
          <div className="tags">
            {['React', 'Node.js', 'MongoDB', 'UI/UX', 'AI'].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button
              className="primary"
              onClick={() => go('work')}
            >
              Explore My Work
              <Icon name="arrow" />
            </button>

            <button
              className="secondary"
              onClick={() => go('contact')}
            >
              Contact Me
            </button>

            <a
              className="secondary"
              href="/cv/cv.pdf"
              download="Eman-Abdulsemed-CV.pdf"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="social">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" />
              LinkedIn
            </a>

            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              Email
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-visual">
          <div className="image-card">

            <img
              src="/profile.png"
              alt="Eman Abdulsemed"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            <div className="placeholder">
              <Icon name="code" size={45} />
              <b>YOUR IMAGE</b>
              <small>Replace public/profile.png</small>
            </div>

            <span className="float one">
              &lt;/&gt; Full Stack
            </span>

            <span className="float two">
              ✦ AI / RAG
            </span>

          </div>
        </div>

      </div>

      {/* Scroll Button */}
      <button
        className="scroll"
        onClick={() => go('about')}
      >
        Scroll to explore
      </button>
    </section>
  );
}