module.exports = mongoose => {
  
    const itemid = mongoose.model(
      "itemincid",
      mongoose.Schema(
        {   
            _id: {type: String, required: true},
            seq: { type: Number, default: 0 }
        }
      )
    );
  
    return itemid;
  };
