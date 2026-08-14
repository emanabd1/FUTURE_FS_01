import { useState } from "react";
import Icon from "./Icon";
import { chat } from "../lib/api";

export default function Chatbot() {
  const [o, setO] = useState(false);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  const [m, setM] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Eman's portfolio assistant. Ask me about projects, skills, certificates, UI/UX or experience.",
    },
  ]);

  async function submit(e) {
    e.preventDefault();

    const text = q.trim();

    if (!text || loading) return;

    setM((x) => [
      ...x,
      {
        role: "user",
        content: text,
      },
    ]);

    setQ("");
    setLoading(true);

    try {
      const reply = await chat(text);

      if (!reply || !reply.answer) {
        throw new Error("No reply received");
      }

      setM((x) => [
        ...x,
        {
          role: "assistant",
          content: reply.answer,
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setM((x) => [
        ...x,
        {
          role: "assistant",
          content:
            error.message ||
            "The AI assistant is currently unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className="chat-button"
        onClick={() => setO(!o)}
      >
        <Icon
          name={o ? "close" : "bot"}
          size={23}
        />
      </button>

      {o && (
        <div className="chat">
          <header>
            <b>
              <Icon name="bot" size={18} />
              Ask About Me
            </b>

            <button
              onClick={() => setO(false)}
            >
              <Icon
                name="close"
                size={18}
              />
            </button>
          </header>

          <div className="messages">
            {m.map((x, i) => (
              <div
                key={i}
                className={`message ${x.role}`}
              >
                {x.content}
              </div>
            ))}

            {loading && (
              <div className="message assistant">
                Thinking...
              </div>
            )}
          </div>

          <form onSubmit={submit}>
            <input
              value={q}
              onChange={(e) =>
                setQ(e.target.value)
              }
              placeholder="Ask me something..."
            />

            <button
              type="submit"
              disabled={loading || !q.trim()}
            >
              <Icon
                name="send"
                size={17}
              />
            </button>
          </form>
        </div>
      )}
    </>
  );
}