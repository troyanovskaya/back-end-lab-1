const {Note}=require('../schema/Note.js');
const {User}=require('../schema/User.js');
const {Category}=require('../schema/Category.js');
const {BankAccount}=require('../schema/BankAccount.js');

async function createNote(req, res, next){
    try{
        const {idUser, idCategory, operationSum}=req.body;
        if(!idUser){
          throw ('You need to enter idUser');
        }
        if(!idCategory){
          throw ('You need to enter idCategory');
        }
        if(!operationSum){
          throw ('You need to enter operationSum');
        }
        const userCheck = await User.findById(idUser);
        if(!userCheck){
          throw ('This user does not exist');
        }
        const categoryCheck = await Category.findById(idCategory);
        if(!categoryCheck){
          throw ('This category does not exist');
        }
          const note = await new Note({idUser, idCategory, date: new Date(), operationSum});
          Note.init()
            .then(async()=>{
                  await Note.create(note);
                  res.status(200).send({"message": "successfully created", "note": note});
            })
            .catch(error => {
                res.status(400).send({"error": error});
            });      
    }catch(e){
        res.status(500).send({"message": e});
    }
    
}
async function getCreatedNotes(req, res, next){
    try{
      const {idUser} = req.body;
      if(!idUser){
        throw ('You need to enter idUser');
      }
      const notes = await Note.find({idUser: idUser});
      if(notes){
        res.status(200).send({"notes": notes});
      }else{
        res.status(400).send({"message": "bad request"});
      }
      
    }catch(e){
        res.status(500).send({"message": e});
    }    
}

async function getNotesByCategory(req, res, next){
    try{
      const {idUser} = req.body;
      if(!idUser){
        throw ('You need to enter idUser');
      }
      let {categoryId}=req.params;
      const notes = await Note.find({idUser: idUser, idCategory: categoryId});
      if(notes){
        res.status(200).send({"notes": notes});
      }else{
        res.status(400).send({"message": "bad request"});
      }
      
    }catch(e){
        res.status(500).send({"message": e});
    }    
}

module.exports = {
    createNote,
    getCreatedNotes,
    getNotesByCategory

}