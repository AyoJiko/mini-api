// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();


const MONGO_URI = "mongodb://mongo:XWvcvAItNMjxoHyICzWcErvRJQeUYIBG@mongodb.railway.internal:27017/mini-api";
const PORT = 3000;

const app = express();

// Middleware pour parser le corps des requêtes
app.use(bodyParser.json());

// Connexion à MongoDB (assure-toi d’avoir une base de données MongoDB en ligne comme MongoDB Atlas)
// Connexion avec authentification



mongoose.connect(MONGO_URI)
.then(() => console.log("✅ Connexion MongoDB réussie !"))
.catch(err => console.error("❌ Erreur de connexion MongoDB :", err));

// Routes
app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});
