const fs = require("fs");

//1:create a new file
fs.writeFile("read.txt", "have a nice day :)", (err) => {
  console.log("file created!")
});

//2:add more Data 
fs.appendFile("read.txt", "hello everyone..", (err) => {
  console.log('data added!');
});

//3: read data
fs.readFile("read.txt", "utf-8", (err, data) => {
   console.log(data);
});

//4 remove file 
fs.unlink("./read.txt", (err) => {
    console.log("Successfully Removed file!")
});