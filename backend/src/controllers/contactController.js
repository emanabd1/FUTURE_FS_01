const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        res.status(200).json({ success: true, contacts });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = { submitContact, getContacts };