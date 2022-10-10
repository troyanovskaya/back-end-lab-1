const {Note}=require('../schema/Note.js');

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
function getCreatedNotes(req, res, next){
    try{
        let userId=2;
      let note1={'id':1, 'idUser':1, 'idCategory':1, 'date': new Date(), 'sum':123};
      let note2={'id':2, 'idUser':2, 'idCategory':4, 'date': new Date(), 'sum':876};
      let note3={'id':3, 'idUser':3, 'idCategory':3, 'date': new Date(), 'sum':76};
      let note4={'id':4, 'idUser':2, 'idCategory':3, 'date': new Date(), 'sum':15};
      let note5={'id':5, 'idUser':2, 'idCategory':1, 'date': new Date(), 'sum':1023};
      const notes=[note1, note2, note3, note4, note5];
      const filteredNotes=notes.filter(el=>el.idUser==userId);
      if(notes){
        res.status(200).send({"notes": filteredNotes});
      }else{
        res.status(400).send({"message": "bad request"});
      }
      
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }    
}

function getNotesByCategory(req, res, next){
    try{
      let userId=2;
      let {categoryId}=req.params;
      let note1={'id':1, 'idUser':1, 'idCategory':1, 'date': new Date(), 'sum':123};
      let note2={'id':2, 'idUser':2, 'idCategory':4, 'date': new Date(), 'sum':876};
      let note3={'id':3, 'idUser':3, 'idCategory':3, 'date': new Date(), 'sum':76};
      let note4={'id':4, 'idUser':2, 'idCategory':4, 'date': new Date(), 'sum':15};
      let note5={'id':5, 'idUser':2, 'idCategory':1, 'date': new Date(), 'sum':1023};
      const notes=[note1, note2, note3, note4, note5];
      const filteredNotes=notes.filter(el=>el.idUser==userId && el.idCategory==categoryId);
      if(notes){
        res.status(200).send({"notes": filteredNotes});
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