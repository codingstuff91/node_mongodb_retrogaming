const mongoose = require('mongoose')

const game = mongoose.model('Game',{
    name : {
        type : String 
    },
    year : {
        type : Number
    },
    console : {
        type : String
    }
})

module.exports = game