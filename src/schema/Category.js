class Category{
    constructor(categoryName){
        this.categoryName=categoryName;
        this.id=new Symbol(categoryName);
    }
}
module.exports ={
    Category
}