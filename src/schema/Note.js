class Note{
    constructor(user, category, sum){
        this.id=1;
        this.idUser=user.id;
        this.idCategory=category.id;
        this.date=new Date();
        this.sum=sum;
    }
}

module.exports ={
    Note
}