import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.end("This is a test page");
});

app.listen(4000, () => {
  console.log("server has started");
});
