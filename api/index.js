const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var app = express();
const Router = require("./routes");
app.use(express.json());

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(Router);
mongoose.connect(
  "mongodb+srv://root:root@todo.kkypwwy.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const PORT = process.env.PORT || 3000;
// app.use(express.static(path.join(__dirname, "../ui/build")));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../ui/build/index.html"));
// });
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
