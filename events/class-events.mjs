import { EventEmitter } from "events";

class Post extends EventEmitter {
  constructor(name, text) {
    super();
    this.name = name;
    this.text = text;
    this.likes = 0;

    this.on("likePost", () => console.log("Like!"));
  }

  like() {
    this.likes += 1;
    this.emit("likePost");
  }
}

const myPost = new Post("title 1", "text 1");

console.log(myPost.likes);
myPost.like();
console.log(myPost.likes);
