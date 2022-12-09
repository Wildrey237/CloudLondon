const mongoose = require('mongoose')

const MatchSchema = mongoose.Schema({
    group:{
        type:String,
        required:true
    },
    team1:{
        type:String,
        required:true
    },
    team2:{
        type:String,
        required:true
    },
    result:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('mygames', MatchSchema)