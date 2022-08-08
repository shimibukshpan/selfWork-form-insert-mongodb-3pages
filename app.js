const PORT = 3000;

const express = require("express");
const app = express();
app.set('view engine', 'ejs');

const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./mySite");
app.use(express.static(publicDirectoryPath));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const homePageRouter = require("./routs/homePage");
app.use('', homePageRouter);

const formRouter = require("./routs/form");
app.use('/form', formRouter);

app.listen(PORT, () => {
 console.log("Server is up on port " + PORT);
});




