const readline = require('readline');

// Création de l'interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = rl;