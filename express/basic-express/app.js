import express from "express";

const app = express();

const firstHandler = (req, res, next) => {
  console.log("Response from Express");
  next();
};
const secondHandler = (req, res) => res.send("Second handler");

app.get("/", firstHandler, secondHandler);

app.listen(3005, () => console.log("Server was started on port 3005"));
