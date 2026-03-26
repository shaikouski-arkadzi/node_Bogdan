const fs = require("fs");
const dns = require("dns");

console.log("Program start");

// Timeouts
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => {
  process.nextTick(() => console.log("Next tick 2"));
  console.log("Timeout 2");
}, 10);

// Poll Phase
fs.writeFile("event-loop/events/test.txt", "Hello Node.js", () =>
  console.log("File written"),
);

Promise.resolve().then(() => console.log("Promise 1"));

process.nextTick(() => console.log("Next tick 1"));

setImmediate(() => console.log("Immediate 1"));

dns.lookup("localhost", (error, address, family) => {
  console.log("DNS 1 localhost ", address);
});

console.log("Program end");

// Sync
//  ├── Program start
//  ├── fs.writeFile()
//  │      ├── создаётся FS request
//  │      ├── регистрируется callback
//  │      ├── отправляется в libuv
//  │      └── Thread pool → начинает писать файл
//  ├── dns.lookup()
//  │      ├── создаётся DNS request
//  │      ├── регистрируется callback
//  │      ├── отправляется в libuv
//  │      └── Thread pool → поиск localhost
//  └── Program end

// Event Loop

// Iteration 1
//  ├── Next tick → Next tick 1
//  ├── Microtasks → Promise 1
//  ├── Timers → Timeout 1
//  ├── Poll
//  │     ├── проверка Thread pool
//  │     ├── fs.writeFile
//  │     │     └── File written
//  │     └── dns.lookup
//  │          └── ещё выполняется
//  ├── Check → Immediate 1

// Iteration 2
//  ├── Timers → Timeout 2
//  ├── Next tick → Next tick 2
//  └── Poll → DNS 1
