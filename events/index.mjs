import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

myEmitter.on("timeout", (seconds) =>
  console.log(`Timeout event ${seconds} seconds!`),
);

setTimeout(() => myEmitter.emit("timeout", 1), 1000);
