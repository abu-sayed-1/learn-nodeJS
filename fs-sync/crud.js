const fs = require('fs');

//1:create a new file
fs.writeFileSync("bio.txt", " this is bio :)");

//2:Add more data into the file at the end of the exiting data
fs.appendFileSync("bio.txt", " |welcome everyone !");

//3:Read the data without getting the buffer data at first file encoding.
const readData = fs.readFileSync("bio.txt", "utf-8");
console.log(readData);

//4:Rename the file name to myBio.txt
fs.renameSync("bio.txt", "myBio.txt");

//5:now delete the file
fs.unlink('myBio.txt', function (err) {
    if(err) throw err;
    console.log("file Deleted!");
})

//6:finally, see the directory current files
const getCurrentFilenames = () => {
    console.log("/nCurrent FileNames:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    });
    console.log("");
};

getCurrentFilenames();
