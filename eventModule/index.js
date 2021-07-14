const EventEmitter = require("events");
const event = new EventEmitter();

event.on("helloWold", () => {
    console.log("hello wold,");
});

event.on("helloWold", () => {
    console.log("HI guis, ");
});

event.on("helloWold", () => {
    console.log("How are you doing,");
});

event.emit("helloWold");


event.on("checkPage", (sta, mess) => {
    console.log(`status code is ${sta} and the page is ${mess}`)
});
event.emit("checksPage", 200, "ok");


