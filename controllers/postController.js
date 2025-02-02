// controllers/postController.js
const Post = require('../models/Post');

// Créer un nouveau post
exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir tous les posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un post
exports.updatePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!post) return res.status(404).json({ message: 'Post non trouvé' });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Supprimer un post
  exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post non trouvé' });
      res.status(200).json({ message: 'Post supprimé' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  