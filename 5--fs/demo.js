const fs = require('fs');

// Lire un fichier
fs.readFile('presentation.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Écrire dans un fichier
const content = 'Ceci est un texte écrit dans le fichier.';
fs.writeFile('exemple.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Fichier écrit avec succès!');
});

// Ajouter du contenu à un fichier
const additionalContent = '\nTexte additionnel.';
fs.appendFile('exemple.txt', additionalContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Contenu ajouté avec succès!');
});
