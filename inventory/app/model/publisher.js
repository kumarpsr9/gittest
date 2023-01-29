module.exports = mongoose => {
  
    const protype = mongoose.model(
      "publisher",
      mongoose.Schema(
        {
            publisherName : String,
            publisherCode : {type : String, unique: true,  dropDups: true}
        },
        { timestamps: true }
      )
    );
  
    return protype;
  };
