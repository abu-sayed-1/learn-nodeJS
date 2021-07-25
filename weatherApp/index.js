const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Nepal&appid=yourApiKey")
            .on("data", (weatherData) => {
                const convertJsonTo_ArrayObject = [JSON.parse(weatherData)];
                const realTimeData = convertJsonTo_ArrayObject.map(val => replaceVal(homeFile, val))
                    .join("");
                res.write(realTimeData);
            })
            .on("end", (err) => {
                res.end();
                console.log(err)
            });
    }
});

server.listen(4000);