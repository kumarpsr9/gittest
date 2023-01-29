const db = require("../model");
const manufacturerdb = db.manufacturerinfo;
require("./commonfunction")();	

module.exports = {

    getmanufacturers : async (req, res, next) =>{
        try{
            let manufacturers = await manufacturerdb.find();
            res.json(manufacturers);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postmanufacturer : async(req, res, next) => {
        try{
            let insertmanufacturer = await manufacturerdb(req.body).save();
            res.json(insertmanufacturer);
        } catch(err){
            if(err.code=='11000'){
                res.send(httpresponse(err.code))
            } else {
                res.send(httpresponse(500))
            }
        }    
    },

}