module.exports = mongoose => {
  
    const storeinfo = mongoose.model(
      "store",
      mongoose.Schema(
        {  
            _id: {type: String, required: true},
            storeName : String,
            storeCode : {type: String,  unique: true,  dropDups: true, required: true},
            storeType : String,
            campus : Array,
            productCategory : Array,
            storeStatus : { type: String, default: "Active" },
            defaultCampus : String
        },
        { timestamps: true }
      )
    );
  
    return storeinfo;
  };
