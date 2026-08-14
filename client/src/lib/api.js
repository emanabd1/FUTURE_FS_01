const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(url, options = {}) {
  const response = await fetch(url, options);

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

// ------------------------------------
// AI / RAG Chatbot
// ------------------------------------

export async function chat(message) {
  const data = await request(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  return {
    answer:
      data.answer ||
      data.reply ||
      data.response ||
      data.message ||
      "I could not find an answer.",
    sources: data.sources || [],
  };
}

// ------------------------------------
// Contact Form
// ------------------------------------

export async function contact(payload) {
  return request(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

// ------------------------------------
// Health Check
// ------------------------------------

export async function healthCheck() {
  return request(`${API_URL}/health`, {
    method: "GET",
  });
}

// ------------------------------------
// Projects
// ------------------------------------

export async function getProjects() {
  return request(`${API_URL}/projects`, {
    method: "GET",
  });
}