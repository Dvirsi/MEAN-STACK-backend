const express = require('express');
const userBL = require('../models/userBL');
const router = express.Router();


router.get('/', async function(req, resp)
{
    let users = await userBL.getAllUsers();
    return resp.json(users);
})

router.get('/:id', async function(req,resp)
{
    let userId = req.params.id;
    let user = await userBL.getUser(userId);
    return resp.json(user);
})

router.post('/', async function(req,resp)
{
    let obj = req.body;
    let userId = await userBL.addUser(obj);
    return resp.json(userId)
})

router.put('/:id', async function(req,resp)
{
    let userId = req.params.id;
    let obj = req.body;

    await userBL.updateUser(userId, obj);
    return resp.json("Updated!")
})

router.delete('/:id', async function(req,resp)
{
    let userId = req.params.id;
    await userBL.deleteUser(userId);
    return resp.json("Deleted!")
})


module.exports = router;