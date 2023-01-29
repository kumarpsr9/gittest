module.exports = mongoose => {
  
    const protype = mongoose.model(
      "producttype",
      mongoose.Schema(
        {
          productType : String,
          ProductTypeShortCode : {type : String, unique: true,  dropDups: true}
        },
        { timestamps: true }
      )
    );
  
    return protype;
  };
