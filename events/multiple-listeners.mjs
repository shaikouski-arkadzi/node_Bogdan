import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const firstListener = () => console.log("First event");

const secondListener = () => console.log("Second event");

myEmitter.on("run", firstListener);
myEmitter.on("run", secondListener);

setTimeout(() => myEmitter.emit("run"), 1000);

// Default - 10
console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(20);
console.log(myEmitter.getMaxListeners());

console.log(myEmitter.eventNames());
