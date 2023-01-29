module.exports = mongoose => {
  
    const invproduct = mongoose.model(
      "productcategory",
      mongoose.Schema(
        {
          productCatName : String,
          productCatShortCode : {type : String, unique: true,  dropDups: true}
        },
        { timestamps: true }
      )
    );
  
    return invproduct;
  };
