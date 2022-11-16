const {BankAccount}=require('../schema/BankAccount.js');
const {User}=require('../schema/User.js');

async function getCurrentBalance(req, res, next){
    try{
        const {idUser}=req.body;
        const account = await BankAccount.find({"idUser": idUser}).sort({ _id: -1 }).limit(1);
        if(account[0]===undefined){
          res.status(200).send({"message": "No information about bank account"})
        } else{
          res.status(200).send({"current balance": account[0].currentBalance});
        }
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}

async function pushMoney(req, res, next){
    try{
        const { idUser, operationType, operationSum} = req.body;
        const userCheck = await User.findById(idUser);
        let accountMoney;
        const list = await BankAccount.find({"idUser": idUser}).sort({ _id: -1 }).limit(1);
        accountMoney = list[0]===undefined ? 0 : list[0].currentBalance;
        let currentBalance;
        currentBalance = operationType === 'Receipt of funds' ? accountMoney + operationSum : accountMoney - operationSum
        BankAccount.init()
            .then(async () =>{
                await BankAccount.create({idUser, operationType, operationSum, currentBalance});
                res.status(200).send({"message": "success"});
            })
            .catch(error => {
                res.status(400).send({"error": error.message});
            });
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }    
}

module.exports = {
    pushMoney,
    getCurrentBalance
}