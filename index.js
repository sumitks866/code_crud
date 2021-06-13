require("dotenv").config({path:'./env'});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "80mb" }));
app.use(express.urlencoded({ limit: "80mb",extended:true }));
app.use(cors());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
const con = mongoose.connection;

con.on("error", console.error.bind(console, "connection error:"));
con.once("open", () => {
  console.log("Connected to mongodb");
});

const projectRouter = require("./routes/ProjectRoute");
app.use("/", projectRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
