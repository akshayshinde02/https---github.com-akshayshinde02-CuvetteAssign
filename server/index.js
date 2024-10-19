const express = require('express')
const router = express.Router();
const User = require('./UserSchema')
const Interview = require('./Interview')


router.post('/signup',async (req,res)=>{
    try {

        const { name, phoneNumber, companyEmail, companyName, companySize } = req.body;

        if (!name || !phoneNumber || !companyEmail || !companyName || !companySize){
            return res.status(400).json({message:"All Fields are Required!"})
        }

        const user = new User({
            name,
            phoneNumber,
            companyEmail,
            companyName,
            companySize
        });

        const savedUser = await user.save();
        res.status(201).json(savedUser)
        
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
})

router.post('/iniewsend-email-otp',async (req,res)=>{
    try {

        const { title,description ,level, addcandidate, date } = req.body;
        const interview = new Interview({
            title,
            description ,
            level,
            addcandidate,
            date
        });

        const savedUser = await interview.save();
        res.status(201).json(savedUser)
        
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
})

module.exports = router;