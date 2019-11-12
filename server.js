// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const routes = require("./routes/index");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use(routes);

// REQUIRE MONGOOSE AND CONNECTION TO DATABASE //
// const mongoose = require("mongoose");
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false })
//   .then(() => {
//     console.log("💻 ==> Database Connected!!");
//   })
//   .catch(err => {
//     console.log(`Error connecting to Mongo: ${err}`);
//   });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
