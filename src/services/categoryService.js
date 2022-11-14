const {Category}=require('../schema/Category.js');

async function createCategory(req, res, next){

    try{
        const {categoryName}=req.body;
        if(categoryName){
            const category=await new Category({categoryName});
            category.save();
            res.status(200).send({"message": "success", "category": category });
        }else{
            res.status(400).json({"message": "bad1 request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal2 server error"});
    }
    
}

async function getCategoryList(req, res, next){
    try{
      const categories = await Category.find({});
      const categoryNames = categories.map(el => el.categoryName);

      console.log(categoryNames);
      if(categoryNames){
        res.status(200).send({"categoryNames": categoryNames});
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