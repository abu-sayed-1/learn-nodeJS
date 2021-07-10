const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("this is Home");
    } else if (req.url === "/about") {

        res.end("this is about")
    }
    else if (req.url === "/contact") {

        res.end("this is contact")
    } else {
        res.writeHead(404);
        res.end("<h1>bad request 404!</h1>");
    }
});


server.listen(4000);