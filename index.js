const fs = require("fs");
// create a new file
// fs.writeFileSync("read.txt", "welcome to my channel");

// fs.writeFileSync("read.txt", "welcome to abu sayed rakib channel");

// fs.appendFileSync("read.txt", " | how are you? I am fine Thank you :)");

// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("read.txt", "readwrite.txt")


