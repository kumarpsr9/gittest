module.exports = mongoose => {
  
    const supplierinfo = mongoose.model(
      "suppliers",
      mongoose.Schema(
        {   
            _id: {type: String, required: true},
            companyName : String,
            productCategory : Array,
            gstNo : String,
            panCard : String,
            mobileNo : String,
            email : String,
            whatsapp : String,
            addressInfo : Object
        },
        { timestamps: true }
      )
    );
  
    return supplierinfo;
  };
