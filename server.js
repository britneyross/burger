const express = require("express");
const router = require("./controllers/burgers_controller");
const handlebars = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});