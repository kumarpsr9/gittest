module.exports = mongoose => {
  
    const packtype = mongoose.model(
      "packagetype",
      mongoose.Schema(
        {
          packTypeName : String,
          packTypeShortCode : {type : String, unique: true,  dropDups: true}
        },
        { timestamps: true }
      )
    );
  
    return packtype;
  };
