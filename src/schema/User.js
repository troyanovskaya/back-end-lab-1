const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/back-end?retryWrites=true&w=majority');

const userSchema=mongoose.Schema({
    login:{
      type:String,
      required:true
    }
});
const User=mongoose.model('User', userSchema);
module.exports={
    User
}