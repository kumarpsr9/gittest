const db = require("../model");
const protypes = db.producttypes;
require("./commonfunction")();	

module.exports = {

    getproducttypes : async (req, res, next) =>{
        try{
            const producttypes = await protypes.find();
            res.json(producttypes);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postproducttype : async(req, res, next) => {
        try{
            const insertprotype = await protypes(req.body).save();
            // const options = { ordered: true };
            // const insertprotype = await protypes.insertMany(req.body, options);
            res.json(insertprotype);
        } catch(err){
            //console.log(err);
            res.send("Error "+ err)
        }    
    },

}