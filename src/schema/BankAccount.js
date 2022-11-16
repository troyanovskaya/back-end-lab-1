const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/back-end?retryWrites=true&w=majority');
const bankAccountSchema=mongoose.Schema({
    idUser:{
        type:String,
        required:true
    },
    idNote:{
        type:String,
        required: false
    },
    operationType:{
      type:String,
      required:true,
      enum: ['Receipt of funds', 'Withdrawal of funds']
    },
    operationSum:{
      type:Number,
      required:true,
      min: [0, 'Sum can only bi positive']
    },
    currentBalance:{
        type:Number,
        required:true,
        min: [0, 'Not enough money for this operation']
    }
});
const BankAccount=mongoose.model('BankAccount', bankAccountSchema);
module.exports={
    BankAccount
}