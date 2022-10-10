const {Category}=require('../schema/Category.js');

function createCategory(req, res, next){

    try{
        const {categoryName}=req.body;
        if(categoryName){
            const category=new Category(categoryName);
            res.status(200).send({"message": "success", "category": category });
        }else{
            res.status(400).json({"message": "bad1 request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal2 server error"});
    }
    
}

function getCategoryList(req, res, next){
    try{
      let categoryList=[{'id':1, 'categoryName': 'Entertainment'}, {'id':2, 'categoryName': 'Medicine'}, {'id':3, 'categoryName': 'Education'}];
      let names=categoryList.map(el=>el.categoryName)
      if(names){
        res.status(200).send({"categoryNames": names});
      }else{
        res.status(400).send({"message": "bad request"});
      }
      
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }    
}

module.exports = {
    createCategory,
    getCategoryList
}