module.exports = mongoose => {
  
    const prosubcat = mongoose.model(
      "productsubcategory",
      mongoose.Schema(
        {   
            productCategory : String,
            productSubCat : String,
            productSubCatCode : {type : String, unique: true,  dropDups: true}
        },
        { timestamps: true }
      )
    );
  
    return prosubcat;
  };
