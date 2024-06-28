const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Définir un événement
myEmitter.on('event', () => {
  console.log('Un événement a eu lieu!');
});

// Déclencher l'événement
myEmitter.emit('event');

// Définir un événement avec un argument
myEmitter.on('eventWithArg', (message) => {
  console.log(`Un événement a eu lieu avec le message: ${message}`);
});

// Déclencher l'événement avec un argument
myEmitter.emit('eventWithArg', 'Salut tout le monde!');


// Gestion des erreurs avec EventEmitter
myEmitter.on("error", (err) => {
  console.error("Erreur émise:", err);
});
myEmitter.emit("error", new Error("Ceci est une erreur!"));