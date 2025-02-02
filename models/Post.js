// models/Post.js
const mongoose = require('mongoose');

// Création du schéma
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

// Création du modèle
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
