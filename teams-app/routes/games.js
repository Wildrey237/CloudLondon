const express = require('express')
const router = express.Router()

const match = require('../models/Match')

// INSERTING DATA 
router.post('/', async (req, res) => {
    const matchData = new match({
        group:req.body.group,
        team1:req.body.team1,
        team2:req.body.team2,
        result:req.body.result
    })

    try {
        const matchToSave = await matchData.save()
        res.send(matchToSave)
    } catch (err) {
        res.send({message:err})
    }

})


// GET ALL MATCHES
router.get('/', async (req, res) => {
    try {
        const getMatches = await match.find()
        res.send(getMatches)
    } catch (err) {
        res.send({message:err})
    }
})


// GET MATCH BY ID
/*
router.get('/:matchId', async (req, res) => {
    try {
        const getMatchesById = await match.findById(req.params.matchId)
        res.send(getMatchesById)
    } catch (err) {
        res.send({message:err})
    }
})*/

router.get('/:groupLetter', async (req, res) => {
    try {
        const getMatches = await match.findOne({group:req.params.groupLetter})
        res.send(getMatches)
    } catch (err) {
        res.send({message:err})
    }
})


// UPDATE MATCH
router.patch('/:groupLetter', async (req, res) => {
    const matchData = new match({
        group:req.body.group,
        team1:req.body.team1,
        team2:req.body.team2,
        result:req.body.result
    })

    try {
        const updateMatch = await match.updateOne(
            {_letter:req.params.groupLetter},
            {$set:{
                group:req.body.group,
                team1:req.body.team1,
                team2:req.body.team2,
                result:req.body.result
            }}
        )
        res.send(updateMatch)
    } catch (err) {
        res.send({message:err})
    }
})


// DELETE
router.delete('/:matchLetter', async (req, res) => {
    try {
        const deleteMatch = await match.deleteOne({_letter:req.params.matchLetter})
        res.send(deleteMatch)
    } catch (err) {
        res.send({message:err})
    }
})



module.exports = router