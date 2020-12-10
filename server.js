// Dependencies
// ===========================================================
const express = require("express");

var app = express();
var PORT = 3000;

// routes//

const htmlRoutes = require("./routes/htmlRoute");
const apiRoutes = require("./routes/apiRoute");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT,()=> console.log(`Server Live On Port 3000`));