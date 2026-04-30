import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Response from Express"));

app.listen(3005, () => console.log("Server was started on port 3005"));
