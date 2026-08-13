const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    liveDemoUrl: String,
    githubUrl: String,
    category: String
});

module.exports = mongoose.model('Project', projectSchema);