class Note{
    constructor(user, category, sum){
        this.id=new Symbol(sum);
        this.idUser=user.id;
        this.idCategory=category.id;
        this.date=new Date();
        this.sum=sum;
    }
}

module.exports ={
    Note
}