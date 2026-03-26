const fs = require("fs");

console.log("Program start");

// Timeouts
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => {
  process.nextTick(() => console.log("Next tick 2"));
  console.log("Timeout 2");
}, 10);

// Poll Phase
fs.writeFile("event-loop/events/test.txt", "Hello Node.js", () =>
  console.log("File wrutten"),
);

Promise.resolve().then(() => console.log("Promise 1"));

process.nextTick(() => console.log("Next tick 1"));

setImmediate(() => console.log("Immediate 1"));

console.log("Program end");

// Sync
//  ├── Program start
//  └── Program end

// Event Loop

// Iteration 1
//  ├── Next tick → Next tick 1
//  ├── Microtasks → Promise 1
//  ├── Timers → Timeout 1
//  ├── Poll → (fs ещё пишет файл)
//  ├── Check → Immediate 1
//  ├── Poll → File wrutten

// Iteration 2
//  ├── Timers → Timeout 2
//  └── Next tick → Next tick 2
