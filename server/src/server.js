import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello!");
});

app.get("/hello/:name", (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

app.post("/hello", (req, res) => {
  res.send(`Hi, ${req.body.name}`);
});

app.listen(8000, () => {
  console.log("Server is on fly at port 8000!");
});
