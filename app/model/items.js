module.exports = mongoose => {
  
    const storeinfo = mongoose.model(
      "itemmaster",
      mongoose.Schema(
        {  
            itemCode: {type: String,  unique: true,  dropDups: true, required: true},
            itemName : String,
            itemShortCode : String,
            itemCategory : String,
            itemSubCategory : String,
            units : String,
            packageType : String,
            isFixedAsset : Boolean,
            internalUseOnly : Boolean,
            className : String,
            manufacturer : String,
            brandName   : String, 
            modelNo : String,
            serialNo   : String, 
            bookInfo : Array,
            isActive : Boolean,
            isService : Boolean,
        },
        { timestamps: true }
      )
    );
  
    return storeinfo;
  };
