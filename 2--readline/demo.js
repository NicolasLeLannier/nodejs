const readline = require("readline");

// Création de l'interface readline
const r1 =readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fnAnswer = (name) => {
    console.log(`Bonjour ${name}`);
    r1.close();
};

r1.question("Quel est votre nom ?", fnAnswer);






// Appelle de fonction dans une fonction en décalé, c'est à dire qu'on décide quand afficher la fonction
function greeting(str, cb) {
    console.log(str);

    setTimeout(() => {
        cb();
    }, 2000);
}


greeting("Hello", () => {
    console.log("Salut toi !");
});