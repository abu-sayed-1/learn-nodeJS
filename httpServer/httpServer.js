const http = require("http");
const usersInfo = require("./usersInfo/usersInfo.json");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("this is Home");
    }

    else if (req.url === "/about") {

        res.end("this is about")
    }

    else if (req.url === "/contact") {

        res.end("this is contact")
    }

    else if (req.url === "/usersData") {
        res.end(JSON.stringify(usersInfo));
        console.log(JSON.stringify(usersInfo[0].name))
        res.writeHead(200, { "Content-type": "application/json" })
    }

    else {
        res.writeHead(404);
        res.end("<h1>bad request 404!</h1>");
    }
});


server.listen(4000);