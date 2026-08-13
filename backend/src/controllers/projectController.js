const getProjects = async (req, res) => {
    try {
        const projects = [
            { title: "Role-Based Management System", description: "Full-stack application with Admin, Supervisor, and User roles.", techStack: ["React", "Node.js", "Express", "MongoDB"] },
            { title: "Task Manager REST API", description: "Structured backend REST API using MVC architecture.", techStack: ["Node.js", "Express", "MongoDB"] },
            { title: "Job Sphere", description: "Clean responsive frontend job board layout.", techStack: ["React", "Tailwind CSS"] },
            { title: "Bootcamp Management System", description: "Management and structure for bootcamp operations.", techStack: ["Node.js", "Express", "MongoDB"] },
            { title: "RAG AI Chatbot", description: "AI-powered chatbot integrated into web applications.", techStack: ["React", "Node.js", "AI/RAG"] },
            { title: "To-Do App & Color Palette Picker", description: "Interactive productivity and design tools.", techStack: ["React", "Tailwind CSS"] },
            { title: "Social Proof Section & Toggle Component", description: "Modern UI components for web applications.", techStack: ["React", "CSS"] },
            { title: "UI/UX Case Studies & Daily UI (1-30)", description: "Comprehensive mobile app case studies and wireframes.", techStack: ["Figma", "Canva", "UI/UX"] }
        ];
        res.status(200).json({ success: true, projects });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = { getProjects };