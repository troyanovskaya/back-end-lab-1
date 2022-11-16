const {BankAccount}=require('../schema/BankAccount.js');
const {User}=require('../schema/User.js');

async function getCurrentBalance(req, res, next){
    try{
        const {idUser}=req.body;
        if(!idUser){
            throw ('You need to enter idUser');
        }
        const account = await BankAccount.find({"idUser": idUser}).sort({ _id: -1 }).limit(1);
        if(account[0]===undefined){
          res.status(200).send({"message": "No information about bank account"})
        } else{
          res.status(200).send({"current balance": account[0].currentBalance});
        }
    }catch(e){
        res.status(500).send({"message": e});
    }
    
}

async function pushMoney(req, res, next){
    try{
        const { idUser, operationType, operationSum} = req.body;
        if(!idUser){
            throw ('You need to enter idUser');
        }
        if(!operationType){
            throw ('You need to enter operationType');
        }
        const userCheck = await User.findById(idUser);
        if(!userCheck){
            throw ('This user does not exist');
        }
        let accountMoney, currentBalance;
        const list = await BankAccount.find({"idUser": idUser}).sort({ _id: -1 }).limit(1);
        accountMoney = list[0]===undefined ? 0 : list[0].currentBalance;
        currentBalance = operationType === 'Receipt of funds' ? accountMoney + operationSum : accountMoney - operationSum
        BankAccount.init()
            .then(async () =>{
                let account = await BankAccount.create({idUser, date: new Date(), operationType, operationSum, currentBalance});
                res.status(200).send({"message": "success", "bank account": account});

            })
            .catch(error => {

                res.status(400).send({"error": error.message});
            });
    }catch(e){
        res.status(500).send({"message": e});
    }    
}


async function pushMoneyForNote(req, res, next){
    try{
        operationType = 'Withdrawal of funds';
        const { idUser, operationSum} = req.body;
        if(!idUser){
            throw ('You need to enter idUser');
        }
        if(!operationSum){
            throw ('You need to enter operationSum');
        }
        const userCheck = await User.findById(idUser);
        console.log(userCheck);
        if(!userCheck){
            console.log('1111');
            throw ('There is no such user');
        }
        let accountMoney, currentBalance;
        const list = await BankAccount.find({"idUser": idUser}).sort({ _id: -1 }).limit(1);
        accountMoney = list[0]===undefined ? 0 : list[0].currentBalance;
        currentBalance = operationType === 'Receipt of funds' ? accountMoney + operationSum : accountMoney - operationSum
        BankAccount.init()
            .then(async () =>{
                await BankAccount.create({idUser, date: new Date(), operationType, operationSum, currentBalance});
                next();
            })
            .catch(error => {
                res.status(400).send({"error": error.message});
            });
    }catch(e){
        res.status(500).send({"message": e});
    } 
}
module.exports = {
    pushMoney,
    getCurrentBalance,
    pushMoneyForNote
}