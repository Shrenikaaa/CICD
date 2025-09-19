const router = require('express').Router();
const User = require('../models/user.models');

router.route('/signup',async(req,res)=>{
    const {username,password} = req.body;
    const newUser = new User({username,password});
    try{
        await newUser.save();
        res.status(201).send('User registered successfully');
    }catch(err){
        res.status(400).send('Error registering user:'+err.message);
    }
});

module.exports = router;
