// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route pour créer un post
router.post('/posts', postController.createPost);

// Route pour récupérer tous les posts
router.get('/posts', postController.getAllPosts);

// PUT : Mettre à jour un post
router.put('/posts/:id', postController.updatePost);

// DELETE : Supprimer un post
router.delete('/posts/:id', postController.deletePost);


module.exports = router;
