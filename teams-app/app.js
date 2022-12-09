const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')

// TEAMS
const teamsRoute = require('./routes/teams')

app.use(bodyParser.json())
app.use('/teams', teamsRoute)


// GAMES
const gamesRoute = require('./routes/games')

app.use(bodyParser.json())
app.use('/games', gamesRoute)



// MAIN

app.get('/', (req, res) => {
    res.send('Homepage')
})


mongoose.connect(process.env.DB_CONNECTOR, () => {
    console.log('Your mongoDB connector is on...')
})

app.listen(3005, (req, res) => {
    console.log('Server is up and running...')
})