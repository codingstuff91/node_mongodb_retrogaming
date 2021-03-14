var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
var database = require('../config/database')
const game = require('../models/game')

/* GET all the consoles */
router.get('/', function(req, res, next) {
    const new_game = new game({ name : "street fighter", year : 1990, console : 'super-nes'})
    database().
    then(()=>{
        new_game.save().
        then(() =>{res.send('Nouveau jeu crée')})
        .catch((error) =>{console.log('Error!',error)})
    })
});

router.get('/:game_console', (req,res) =>{
    game.find({}, (err, docs) => {
        res.json(docs)
    })
})

router.get('/:console/:category', (req,res) =>{

})

module.exports = router;
