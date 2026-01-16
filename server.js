const express = require('express');
const app = express();
const mysql = require('mysql2');    

const connection = mysql.createConnection({
  host: '172.29.18.126', //localhost si votre node est sur la meme VM que votre Bdd
  user: 'accessNodeServerDemo',
  password: 'accessNodeServerDemo',
  database: 'BDDANTOINE'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');  
});

app.use(express.static('public'));
app.use(express.json());

app.get('/login', (req, res) => {
  res.send('<h1>Bienvenue sur la page de login  </h1>');
});
 

app.get('/info', (req, res) => {
  res.json({ cle1: 'banane', cle2: 'titi' });
});
 

app.post('/register', (req, res) => {

connection.query(
  'INSERT INTO user (login) VALUES (?)',
  [req.body.inputValue],
  (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'insertion dans la base de données :', err);
      res.status(500).json({ message: 'Erreur serveur' });
      return;
    }
    console.log('Insertion réussie, ID utilisateur :', results.insertId);
    res.json({ message: 'Inscription réussie !', userId: results.insertId });
  }
);
});
 

app.listen(3000, () => {
  let monIp = require("ip").address();
  console.log(`Server running on http://${monIp}:3000`);
});