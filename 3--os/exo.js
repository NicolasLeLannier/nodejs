// ------------------------------- Ma façon -------------------------------
const os = require('os');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getOSInfo(infoType) {
  switch(infoType) {
    case 'hostname':
      return os.hostname();
    case 'platform':
      return os.platform();
    case 'arch':
      return os.arch();
    case 'uptime':
      return os.uptime();
    case 'homedir':
      return os.homedir();
    case 'userInfo':
      return os.userInfo();
    case 'networkInterfaces' :
      return os.networkInterfaces();
    case 'cpus' :
      return os.cpus();
    case 'type' :
      return os.type();
    default:
      return "Information non disponible. Essayez 'hostname', 'platform', 'arch', 'uptime', 'homedir', 'userInfo', 'networkInterfaces', 'cpus', ou 'type'.";
  }
}

function askQuestion() {
  rl.question("Quelle info voulez-vous sur votre OS? (ou tapez 'exit' pour quitter): ", (answer) => {
    if (answer.toLowerCase() === 'exit') {
      rl.close();
    } else {
      const info = getOSInfo(answer);
      console.log(info);
      askQuestion();
    }
  });
}

askQuestion();




// ------------------------------- Façon correction -------------------------------

// const rl = require("./rl");
// const { arch, platform, tmpdir, totalmem, cpus } = require("os");

// const map = new Map([
//   ["arch", `Architecture du système: ${arch()}`],
//   ["platform", `Plateforme du système: ${platform()}`],
//   ["cpus", "Informations sur les CPUs:"],
//   ["memory", `Mémoire totale du système: ${totalmem()} octets`],
//   ["tmpdir", `Répertoire temporaire du système: ${tmpdir()}`],
// ]);

// runApp();

// function runApp() {
//   rl.question(
//     "\nQuelle info système souhaitez-vous récupérer ?\n(arch, platform, cpus, memory, tmpdir): ",
//     (line) => {
//       if (line === "exit") return rl.close();
//       console.log(" --> ", map.get(line));
//       if (line === "cpus") console.table(cpus());
//       runApp();
//     }
//   );
// }