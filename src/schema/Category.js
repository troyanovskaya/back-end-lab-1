const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/back-end?retryWrites=true&w=majority');
// class Category{
//     constructor(categoryName){
//         this.categoryName=categoryName;
//         this.id=1;
//     }
// }
// module.exports ={
//     Category
// }

const categorySchema=mongoose.Schema({
    categoryName:{
      type:String,
      required:true
    }
});
const Category=mongoose.model('Category', categorySchema);
module.exports={
    Category
}