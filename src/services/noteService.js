const {Note}=require('../schema/Note.js');

async function createNote(req, res, next){

    try{
        const {user, category, sum}=req.body;
        if(user && category && sum){
            const note= await new Note({idUser: user.id, idCategory: category.id, date: JSON.stringify(new Date()), sum: sum});
            note.save();
            res.status(200).send({"message": "success", "note": note });
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