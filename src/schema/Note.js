const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/back-end?retryWrites=true&w=majority');
// class Note{
//     constructor(user, category, sum){
//         this.id=1;
//         this.idUser=user.id;
//         this.idCategory=category.id;
//         this.date=new Date();
//         this.sum=sum;
//     }
// }

// module.exports ={
//     Note
// }

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
    sum:{
        type:Number,
        required:true
    }
});
const Note=mongoose.model('Note', noteSchema);
module.exports={
    Note
}