"use strict";

const express = require("express");
const dotenv = require("dotenv");
const port = 5000 || process.env.PORT;

const app = express();

app.use("/api/todos", require("./routes/todoRoutes"));

app.listen(port, () => console.log(`Server started on port: ${port}`));
