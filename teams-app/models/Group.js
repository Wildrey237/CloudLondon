const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
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
    team3:{
        type:String,
        required:true
    },
    team4:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model('myteams', GroupSchema)