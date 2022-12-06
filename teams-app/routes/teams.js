const { Router } = require('express')
const express = require('express')
const router = express.Router()

const group = require('../models/Group')
/*
router.post('/', async (req, res) => {
    console.log(req.body)
})*/


// INSERTING DATA THROUGH POSTMAN
router.post('/', async (req, res) => {
    //console.log(req.body)
    const groupData = new group({
        group:req.body.group,
        team1:req.body.team1,
        team2:req.body.team2,
        team3:req.body.team3,
        team4:req.body.team4
    })
    //try to insert data
    try {
        const groupToSave = await groupData.save()
        res.send(groupToSave)
    } catch(err){
        res.send({message:err})
    }
})


// GET ALL GROUPS
router.get('/', async (req, res) => {
    try{
        const getGroups = await group.find()
        res.send(getGroups)
    } catch (err) {
        res.send({message:err})
    }
})

// GET GROUP BY ID
router.get('/:groupId', async (req, res) => {
    try {
        const getGroupById = await group.findById(req.params.groupId)
        res.send(getGroupById)
    } catch (err) {
        res.send({message:err})
    }
})

// GET GROUP BY TEAM 1

router.get('/:team1', async (req, res) => {
    try {
        const getGroupByT1 = await group.findOne({team1:req.params.team1})
        res.send(getGroupByT1)
    } catch (err) {
        res.send({message:err})
    }
})


// UPDATE DATA
router.patch('/:groupId', async (req, res) => {

    const groupData = new group({
        group:req.body.group,
        team1:req.body.team1,
        team2:req.body.team2,
        team3:req.body.team3,
        team4:req.body.team4
    })

    try {
        const updateGroup = await group.updateOne(
            {_id:req.params.groupId},
            {$set:
                {
                    group:req.body.group,
                    team1:req.body.team1,
                    team2:req.body.team2,
                    team3:req.body.team3,
                    team4:req.body.team4
                }
            })
        res.send(updateGroup)
    } catch (err) {
        res.send({message:err})
    }
})


// DELETE 
router.delete('/:groupId', async (req, res) =>{
    try {
        const deleteGroup = await group.deleteOne({_id:req.params.groupId})
        res.send(deleteGroup)
    } catch (err) {
        res.send({message:err})
    }
})



module.exports = router