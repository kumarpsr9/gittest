module.exports = mongoose => {
  
    const storeid = mongoose.model(
      "storeincid",
      mongoose.Schema(
        {   
            _id: {type: String, required: true},
            seq: { type: Number, default: 0 }
        }
      )
    );
  
    return storeid;
  };
