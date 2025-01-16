const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

// Middleware
//we used to have to install body parser but now it is a built-in middleware
//function of express.It parses incoming JSON payload
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send(`Hello ${req.body.name}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
