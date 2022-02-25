"use strict";

const express = require("express");
const dotenv = require("dotenv");
const port = 5000 || process.env.PORT;

const app = express();

app.get("/api/todos", (req, res) => {
  res.send({ message: "hola" });
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
