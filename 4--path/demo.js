const { resolve, basename, extname } = require("path");

console.log(resolve("."));
console.log(basename(__filename));
console.log(extname("coco.png"));

console.log(require, module, __filename, __dirname, exports);