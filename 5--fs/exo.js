// CONSIGNE
//
// 1/ Le programme vous invite à saisir le nom d'un fichier
// 2/ Puis il affiche le contenu du fichier s'il existe

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande une le nom d'un fichier puis afficher son contenu
rl.question("Entrez le nom du fichier à lire: ", function (fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier:", err);
      rl.close();
      return;
    }
    console.log("Contenu du fichier", fileName, ":");
    console.log(data);
    rl.close();
  });
});


const logStream = fs.createWriteStream("logs.txt", { flags: "a" });
const errorStream = fs.createWriteStream("errors.txt", { flags: "a" });

// Ecrit dans le fichier logs.txt (s'il n'existe pas il le créer)
console.log = (message) => {
  const date = new Date().toISOString();
  logStream.write(`${date} - LOG: ${message}\n`);
  process.stdout.write(`${date} - LOG: ${message}\n`);
};

// Ecrit dans le fichier errors.txt (s'il n'existe pas il le créer)
console.error = (message) => {
  const date = new Date().toISOString();
  errorStream.write(`${date} - ERROR: ${message}\n`);
  process.stderr.write(`${date} - ERROR: ${message}\n`);
};