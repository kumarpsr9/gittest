module.exports = mongoose => {
  
    const invunits = mongoose.model(
      "unitsofmeasure",
      mongoose.Schema(
        {
          unitCategory : String,
          unitShortCode : {type : String, unique: true,  dropDups: true},
          unitCode : String
        },
        { timestamps: true }
      )
    );
  
    return invunits;
  };
