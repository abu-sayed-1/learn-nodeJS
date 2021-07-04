const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.version());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.release());
console.log(os.networkInterfaces());
console.log(os.loadavg());
console.log(os.endianness());
console.log(os.cpus());


const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);




