const {User}=require('../schema/User.js');
const assert = require('assert');

async function registerUser(req, res, next){
    try{
        const {login}=req.body;
        if(login){
            User.init()
            .then(async()=>{
                let user = await User.create({login});
                res.status(200).send({"message": "successfully created", "user": user})})
            .catch(error => {
                assert.ok(error);
                assert.ok(!error.errors);
                assert.ok(error.message.indexOf('duplicate key error') !== -1);
                res.status(400).send({"message": "User login is not unique"});
            });
        }else{
            res.status(400).json({"message": "you need to enter login"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}

module.exports = {
    registerUser
}