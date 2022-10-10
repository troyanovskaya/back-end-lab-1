const {User}=require('../schema/User.js');

function registerUser(req, res, next){

    try{
        const {login}=req.body;
        if(login){
            const user=new User(login);
            res.status(200).send({"message": "success", "user": user });
        }else{
            res.status(400).json({"message": "bad request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}

module.exports = {
    registerUser
}