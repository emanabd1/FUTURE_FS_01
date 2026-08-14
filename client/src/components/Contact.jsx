import { useState } from "react";
import Icon from "./Icon";
import { profile } from "../lib/data";
import { contact } from "../lib/api";

export default function Contact() {
  const [f, setF] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [s, setS] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();

    setLoading(true);
    setS("");

    try {
      const result = await contact(f);

      if (!result.success) {
        throw new Error(
          result.message || "Unable to send message."
        );
      }

      setS("Message sent successfully!");

      setF({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setS(
        error.message ||
          "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="section"
    >
      <div className="container contact">
        <div>
          <div className="heading">
            <small>CONTACT ME</small>

            <h2>
              Let's build something{" "}
              <span>meaningful.</span>
            </h2>

            <p>
              Have a project, opportunity or idea?
              Send me a message and let's talk.
            </p>
          </div>

          <div className="contact-links">
            <a
              href={`mailto:${profile.email}`}
            >
              <Icon name="mail" />
              {profile.email}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" />
              github.com/emanabd1
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" />
              LinkedIn
            </a>
          </div>
        </div>

        <form
          className="form"
          onSubmit={submit}
        >
          <label>
            Name

            <input
              type="text"
              value={f.name}
              onChange={(e) =>
                setF({
                  ...f,
                  name: e.target.value,
                })
              }
              required
              placeholder="Name"
            />
          </label>

          <label>
            Email

            <input
              type="email"
              value={f.email}
              onChange={(e) =>
                setF({
                  ...f,
                  email: e.target.value,
                })
              }
              required
              placeholder="Email"
            />
          </label>

          <label>
            Message

            <textarea
              rows="6"
              value={f.message}
              onChange={(e) =>
                setF({
                  ...f,
                  message: e.target.value,
                })
              }
              required
              placeholder="Tell me about your project..."
            />
          </label>

          {s && (
            <div className="form-status">
              {s}
            </div>
          )}

          <button
            className="primary"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send Message"}

            <Icon
              name="send"
              size={17}
            />
          </button>
        </form>
      </div>
    </section>
  );
}