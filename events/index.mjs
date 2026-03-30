import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const timeoutListener = (seconds) =>
  console.log(`Timeout event ${seconds} seconds!`);

myEmitter.on("timeout", timeoutListener);

setTimeout(() => myEmitter.emit("timeout", 1), 1000);

myEmitter.once("singleEvent", () => console.log("Single event"));

setTimeout(() => myEmitter.emit("singleEvent"), 1500);
setTimeout(() => myEmitter.emit("singleEvent"), 2000);

setTimeout(() => myEmitter.off("timeout", timeoutListener), 3000);

setTimeout(() => myEmitter.emit("timeout", 1), 4000);
