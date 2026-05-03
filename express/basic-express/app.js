import express from "express";

const app = express();

const firstHandler = (req, res, next) => {
  console.log("Response from Express");
  next();
};
const secondHandler = (req, res) => res.send("Second handler");

const getCommentsHandler = (req, res) => res.send("Get comments");
const postCommentsHandler = (req, res) => res.send("Post comments");

const getCommentHandler = (req, res) => {
  res.send(`Get comment. CommentId ${req.params.commentId}`);
};

app.get("/", firstHandler, secondHandler);

app.get("/comments", getCommentsHandler);
app.post("/comments", postCommentsHandler);
app.get("/comments/:commentId", getCommentHandler);

app.listen(3005, () => console.log("Server was started on port 3005"));
