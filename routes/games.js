var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');

/* GET all the consoles */
router.get('/', function(req, res, next) {

    consoles_query = "SELECT * FROM consoles"

    db.connect(function(err) {
        console.log("Connecté à la base de données MySQL!");
        db.query(consoles_query, function (err, result) {
            res.render('consoles', { consoles : result})
        });
    });
});

router.get('/:game_console', (req,res) =>{
    
    const game_console = req.params.game_console;
    const sql_query = `SELECT * FROM jeux WHERE console="${game_console}"`

    db.connect(function(err) {
        console.log("Connecté à la base de données MySQL!");
        db.query(sql_query, function (err, result) {
            res.render('games', {games : result, game_console : req.params.game_console})
        });
    });
})

router.get('/:console/:category', (req,res) =>{

    res.send(req.params.category);

})

module.exports = router;
