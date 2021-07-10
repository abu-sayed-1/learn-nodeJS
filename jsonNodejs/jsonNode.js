const fs = require("fs");

// my bio data
const myBioData = {
    firstName: "AS",
    lastName: "Rakib",
    age: 20,
    profession: "web developer",
};

// add more bio data
const addMore_bioData = {
    firstName: "plash",
    lastName: "Khan",
    age: 22,
    profession: "businessman"
}

// create new json file and add json format data.
const jsonData = JSON.stringify(myBioData);
fs.writeFile("bioData.json", jsonData, (err) => {
    console.log("data added");
});


// add more data
fs.appendFile("bioData.json", JSON.stringify(addMore_bioData),(err) => {
    console.log("more data added")
});


// read json data without buffer code
fs.readFile("bioData.json", "utf-8", (err, data) => {
    console.log(JSON.parse(data));
});



