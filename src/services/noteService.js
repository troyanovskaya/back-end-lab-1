const {Note}=require('../schema/Note.js');
// const jwt=require('jsonwebtoken');
// const bcryptjs=require('bcryptjs');

function createNote(req, res, next){

    try{
        const {user, category, sum}=req.body;
        if(user && category && sum){
            const note=new Note(user, category, sum);
            res.status(200).send({"message": "success", "note": note });
        }else{
            res.status(400).json({"message": "bad request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
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
function getCreatedNotes(req, res, next){
    try{
        // this.id=1;
        // this.idUser=user.id;
        // this.idCategory=category.id;
        // this.date=new Date();
        // this.sum=sum;
        let userId=2;
      let note1={'id':1, 'idUser':1, 'idCategory':1, 'date': new Date(), 'sum':123};
      let note2={'id':2, 'idUser':2, 'idCategory':4, 'date': new Date(), 'sum':876};
      let note3={'id':3, 'idUser':3, 'idCategory':3, 'date': new Date(), 'sum':76};
      let note4={'id':4, 'idUser':2, 'idCategory':3, 'date': new Date(), 'sum':15};
      let note5={'id':5, 'idUser':2, 'idCategory':1, 'date': new Date(), 'sum':1023};
      const notes=[note1, note2, note3, note4, note5];
      const filteredNotes=notes.filter(el=>el.idUser===userId);
      if(notes){
        res.status(200).send({"notes": filteredNotes});
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
    createNote,
    getCreatedNotes
    // loginUser,
    // getUsersInfo,
    // deleteUser,
    // changeUsersPassword
}