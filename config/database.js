const mongoose = require('mongoose')

function connect(url){
    return mongoose.connect(url,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology: true
    })
}

module.exports = async function () {
    return connect('mongodb://127.0.0.1:27017/retrogaming');
 };