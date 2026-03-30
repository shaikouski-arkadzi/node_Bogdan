import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

myEmitter.on("timeout", (seconds) =>
  console.log(`Timeout event ${seconds} seconds!`),
);

setTimeout(() => myEmitter.emit("timeout", 1), 1000);

myEmitter.once("singleEvent", () => console.log("Single event"));

setTimeout(() => myEmitter.emit("singleEvent"), 1500);
setTimeout(() => myEmitter.emit("singleEvent"), 2000);
