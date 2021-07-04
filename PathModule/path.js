const path = require("path");


console.log(path.dirname('C:/learn-backend/learnNodejs/PathModule/path.js'));

console.log(path.extname('C:/learn-backend/learnNodejs/PathModule/path.js'));

console.log(path.basename('C:/learn-backend/learnNodejs/PathModule/path.js'));

console.log(path.parse('C:/learn-backend/learnNodejs/PathModule/path.js'));
const parse = path.parse('C:/learn-backend/learnNodejs/PathModule/path.js');

console.log(parse.ext);