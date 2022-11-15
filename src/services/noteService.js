const {Note}=require('../schema/Note.js');
const {User}=require('../schema/User.js');
const {Category}=require('../schema/Category.js');

async function createNote(req, res, next){

    try{
        const {user, category, sum}=req.body;
        const userCheck = await User.findById(user._id);
        const categoryCheck = await Category.findById(category._id);
        if(sum){
          const note = await new Note({idUser: user._id, idCategory: category._id, date: JSON.stringify(new Date()), sum: sum});
          Note.init()
            .then(async()=>{
                await Note.create(note);
                res.status(200).send({"message": "successfully created", "note": note})})
            .catch(error => {
                res.status(400).send({"error": error.message});
            });
        }else{
            res.status(400).json({"message": "bad request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}
async function getCreatedNotes(req, res, next){
    try{
      const {idUser} = req.body;
      const notes = await Note.find({idUser: idUser});
      if(notes){
        res.status(200).send({"notes": notes});
      }else{
        res.status(400).send({"message": "bad request"});
      }
      
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }    
}

async function getNotesByCategory(req, res, next){
    try{
      const {idUser} = req.body;
      let {categoryId}=req.params;
      const notes = await Note.find({idUser: idUser, idCategory: categoryId});
      if(notes){
        res.status(200).send({"notes": notes});
      }else{
        res.status(400).send({"message": "bad request"});
      }
      
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }    
}

module.exports = {
    createNote,
    getCreatedNotes,
    getNotesByCategory

}