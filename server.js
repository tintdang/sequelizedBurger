var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on PORT ${PORT}`);
    });
});