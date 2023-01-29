module.exports = mongoose => {
  
    const protype = mongoose.model(
      "manufacturer",
      mongoose.Schema(
        {
            manufacturerName : String,
            manufacturerCode : {type : String, unique: true,  dropDups: true}
        },
        { timestamps: true }
      )
    );
  
    return protype;
  };
