// models/WebsiteContent.js
const mongoose  = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String
});

const contentSchema = new mongoose.Schema({
  heroTitle: String,
  heroSubtitle: String,
  aboutMe: String,
  projects: [projectSchema],
  skills: [String],
  contact: {
    email: String,
    phone: String,
    location: String
  },
  footerText: String
}, { timestamps: true });

const WebsiteContent = mongoose.model('WebsiteContent', contentSchema);
module.exports = WebsiteContent;