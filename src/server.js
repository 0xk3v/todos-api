"use strict";

const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = 5000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/todos", require("./routes/todoRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port: ${port}`));
