module.exports = mongoose => {
  
    const supid = mongoose.model(
      "supplierincid",
      mongoose.Schema(
        {   
            _id: {type: String, required: true},
            seq: { type: Number, default: 0 }
        }
      )
    );
  
    return supid;
  };
