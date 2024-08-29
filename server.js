const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 8001;
app.use(cors());
app.use(express.json());
console.log("hello");
// app.use(errorHandler);
app.use("/api/users1", require("./routes/routes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});