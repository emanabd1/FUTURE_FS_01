const { getRAGResponse } = require('../services/ragService');

const handleAIChat = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ success: false, error: "Prompt is required" });
        }
        const reply = await getRAGResponse(prompt);
        res.status(200).json({ success: true, reply });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = { handleAIChat };