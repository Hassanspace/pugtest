const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const con =
    "This is the best content on the internet so far so use it wisely";
  const params = { title: "PubG is the best game", content: con };
  res.status(200).render("index.pug", params);
});
app.post("/", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;
  let outputtowrite = `Name of client is ${name},${age} years Old , Gender: ${gender},Address:${address},More About: ${more}`;
  fs.writeFileSync('output.txt',outputtowrite)
  const params = { message: "Your form has been submitted successfully" };
  res.status(200).render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
