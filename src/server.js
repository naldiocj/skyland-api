require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", require("./routes"));

app.use("/api/v1/files", express.static(path.join(__dirname, "..", "uploads")));

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
