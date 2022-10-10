const {Category}=require('../schema/Category.js');
// const jwt=require('jsonwebtoken');
// const bcryptjs=require('bcryptjs');

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
// async function loginUser(req, res, next){ 
//     try{
//         const user=await User.findOne({username: req.body.username});
//         if(user && await bcryptjs.compare(String(req.body.password), String(user.password))){
//             const payload={username:user.username, userId:user._id};
//             const jwtToken=jwt.sign(payload,'secret-key');
//             res.status(200).json({"jwt_token":jwtToken, "message":"success"});
//         }else{
//             res.status(400).send({"message": "bad request"}); 
//         }
//     }catch(e){
//         res.status(500).send({"message": "eternal server error"});
//     }
// }
async function getCategoryList(req, res, next){
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

// async function deleteUser(req, res, next){
//     try{
//         const user=await User.findById(req.user.userId);
//         user.delete();
//         const user1=await User.findById(req.user.userId);
//         if(!await User.findById(req.user.userId)){
//           res.status(200).send({"message":"success"});
//         }else{
//           res.status(400).send({"message": "bad request"});
//         }        
//       }catch(e){
//           res.status(500).send({"message": "eternal server error"});
//       }
// }

// async function changeUsersPassword(req, res, next){
//     try{
//         const oldPassword=req.body.oldPassword;
//         const newPassword=await bcryptjs.hash(req.body.newPassword, 10);
//         const user=await User.findById(req.user.userId);
//         if(bcryptjs.compare(user.password, oldPassword)){
//             user.password=newPassword;
//             user.save();
//             res.status(200).send({"message":"success"});
//         }else{
//             res.status(400).send({"message": "bad request", "pass":oldPassword, "newPassword":newPassword}); 
//         }
//     }catch(e){
//         res.status(500).send({"message": "eternal server error"});
//     }

// }

module.exports = {
    createCategory,
    getCategoryList
    // loginUser,
    // getUsersInfo,
    // deleteUser,
    // changeUsersPassword
}