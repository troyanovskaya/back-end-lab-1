const {Category}=require('../schema/Category.js');
const assert = require('assert');

async function createCategory(req, res, next){

    try{
        const {categoryName}=req.body;
        if(categoryName){
            Category.init()
                .then(async()=>{
                    await Category.create({categoryName});
                    res.status(200).send({"message": "successfully created", "category": categoryName})})
                .catch(error => {
                assert.ok(error);
                assert.ok(!error.errors);
                assert.ok(error.message.indexOf('duplicate key error') !== -1);
                res.status(400).send({"message": "Category name is not unique"});
            });

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