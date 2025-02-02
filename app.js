// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();

// Middleware pour parser le corps des requêtes
app.use(bodyParser.json());

// Connexion à MongoDB (assure-toi d’avoir une base de données MongoDB en ligne comme MongoDB Atlas)
// Connexion avec authentification
mongoose.connect(process.env.MONGO_URI, {
    authSource: 'admin'  // Indiquer où se trouve l'utilisateur pour l'authentification
  })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', postRoutes);

app.listen(process.env.port, () => {
  console.log(`L'API est en fonctionnement sur http://localhost:${process.env.port}`);
});
