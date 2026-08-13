export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const profile = {
  name: "Eman Abdulsemed",
  email: "emanabdulsemed4398@gmail.com",
  github: "https://github.com/emanabd1",
  linkedin: "https://www.linkedin.com/in/eman-abdulsemed-282056324/",
  cvUrl: "/cv/cv.pdf",
};

async function request(url, options) {
  const response = await fetch(url, options);

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

// -------------------------
// Chat
// -------------------------

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

  return (
    data.reply ||
    data.answer ||
    data.response ||
    data.message
  );
}

// -------------------------
// Contact
// -------------------------

export async function contact(payload) {
  return request(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}