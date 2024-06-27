const readline = require('readline');

// Création de l'interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour poser une question à l'utilisateur
function askQuestion() {
  rl.question('Écrivez une ligne (ou tapez "exit" pour quitter) : ', (answer) => {
    if (answer.trim().toLowerCase() === 'exit') {
      console.log('Au revoir!');
      rl.close();
    } else {
      console.log(`Vous avez écrit : ${answer}`);
      askQuestion(); // On recommence à poser la question
    }
  });
}

// Démarrer le processus en posant la première question
askQuestion();
