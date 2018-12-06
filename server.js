//using express, body-parser, and path
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creates an express server set to app
var app = express();

// creates the port using 8080
var PORT = process.env.PORT || 8080;

//allows express server to use the body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

//allows the express server to use the routes by applying "require"
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
