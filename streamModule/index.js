const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {

    //This is not a stream method
    fs.readFile("input.txt", (err, data) => {
        if (err) return console.error(err);
        res.end(data.toString());
    });

    //This is the stream method
    const stream = fs.createReadStream("input.txt");
    stream.on("data", (chunkData) => {
        res.write(chunkData);
    });
    stream.on("end", () => {
        res.end()
    });
    stream.on("error", (err) => {
        console.log(err)
        res.end("document is not found!")
    });
});

server.listen(4000);
