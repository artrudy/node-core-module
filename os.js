const os = require("os");

//arch
console.log(os.arch());

//platform

console.log(os.platform());

if (os.platform() === "darwin") {
  console.log("You are using mac OS");
} else if (os.platform() === "win32") {
  console.log("You are using Windows");
} else {
  console.log("You are using linux");
}

//cpus()
// console.log(os.cpus());

//fremem

console.log(os.freemem());
console.log(`free memory is ${os.freemem() / 1024 / 1024 / 1024} GB`);

//toalmem
console.log(`total memory is ${os.totalmem() / 1024 / 1024 / 1024} GB`);

//homedir

console.log(os.homedir());

//uptime

const uptime = os.uptime();
const days = Math.floor(uptime / 24 / 60 / 60);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 24;
const seconds = Math.floor(uptime) % 60;

console.log(
  `Now is ${days} days  ${hours}  hours ${minutes}  minutes ${seconds} seconds `
);

//hostname

console.log(os.hostname());
console.log(os.userInfo());
