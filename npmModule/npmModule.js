//First, you initialize node.js to your folder. command line => npm init

const validator = require("validator");
// ^ npm i validator or yarn add validator
const chalk = require("chalk");
//^ npm i chalk or yarn add chalk

// To use validator and chalk you must first install,
// then import your file then you can use.


const email = "as@rakib.com";
const response = validator.isEmail(email); //response => true

// you can use condition and chalk color
const res = validator.isEmail("asrakib.com"); // response => false
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));


const res = validator.isEmail("as-rakib@gmail.com"); // response => true
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));