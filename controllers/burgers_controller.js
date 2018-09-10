var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        res.json(dbBurger)
    })
});

router.post("/api/burgers", function(req, res){
    // burger.create("burger_name", req.body.burger_name, function(result) {
    //     res.json({ id: result.insertId })
    // });

});

router.put("/api/burgers/:id", function(req, res){
    // var condition = `id = ${req.params.id}`
    // console.log(`condition is ${condition}`)

    // burger.update(condition, function(result) {
    //     if (result.changedRows == 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // })
})

module.exports = router;