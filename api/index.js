const express = require("express");
const cors = require("cors");
const db = require("./db");
require("dotenv").config();
// console.log(process.env);
const usersRoute = require("./routes/users");
const app = express();
app.use(express.json());
//https://dev.to/ryands17/deploy-a-node-app-to-aws-ecs-with-dynamic-port-mapping-38gd
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use((err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send(err.message);
  } else {
    console.log(err);
    res.status(500).send("Something unexpected happened");
  }
});
app.get("/health", function (req, res) {
  res.status(200).send("instance is healthy");
});
app.use(usersRoute);

const PORT = process.env.PORT || 3000;
// console.log("deb", db);
// console.log("process.env", process.env);
console.log(process.env.NODE_ENV);
app.listen(PORT, () => {
  console.log("Server Started");
});

