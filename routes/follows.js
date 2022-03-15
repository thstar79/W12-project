const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

const { loginUser, logoutUser, restoreUser, requireAuth } = require("../auth");


router.post('/follows', asyncHandler(async (req,res)=>{
    const { userId } = req.session.auth;
    const { userId1 } = req.body;
    const aFollow = await db.Follow.findOne({
        where: {
            follower: userId, 
            followee: userId1
        }
    });
    
    if(aFollow){
        await aFollow.destroy();
    }
    else{
        const follow = db.Follow.build({
            follower: userId,
            followee: userId1
        })
        
        await follow.save();
    }
}));


module.exports = router;