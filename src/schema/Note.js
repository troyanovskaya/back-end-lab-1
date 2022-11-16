const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/back-end?retryWrites=true&w=majority');
const noteSchema=mongoose.Schema({
    idUser:{
      type:String,
      required:true
    },
    idCategory:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    operationSum:{
        type:Number,
        required:true,
        min: [0, 'Sum spent can not be less then 0']
    }
});
const Note=mongoose.model('Note', noteSchema);
module.exports={
    Note
}