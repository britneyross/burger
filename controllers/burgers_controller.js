var express = require("express");
var burgers = require("../models/burger");
var Burger = burgers.Burger;

var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', {layout: 'main'});
})


router.get('/burgers', function (req, res) {
    Burger.getAllBurgers(res)
})


router.post('/addBurger', function (req, res) {

    res.json( { id: Burger.addBurger(req.body.name)} );
})

router.post('/eatBurger', function (req, res) {
    // console.log(req.body);
    Burger.eaten(req.body.id)
    res.send("Burger Eaten!");
})


module.exports = router;
