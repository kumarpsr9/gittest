const db = require("../model");
const packtypes = db.pakagetypes;
require("./commonfunction")();	

module.exports = {

    getpackagetypes : async (req, res, next) =>{
        try{
            const packagetypes = await packtypes.find();
            res.json(packagetypes);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postpackagetype : async(req, res, next) => {
        try{
            const insertprotype = await packtypes(req.body).save();
            // const options = { ordered: true };
            // const insertprotype = await packtypes.insertMany(req.body, options);
            res.json(insertprotype);
        } catch(err){
            //console.log(err);
            res.send("Error "+ err)
        }    
    },

}