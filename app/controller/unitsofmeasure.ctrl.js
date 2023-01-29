const db = require("../model");
const invunits = db.units;
require("./commonfunction")();	

module.exports = {

    getunitsofmsrs : async (req, res, next) =>{
        try{
            const uintlist = await invunits.find();
            res.json(uintlist);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postunitsofmsrs : async(req, res, next) => {
        try{
            //const uintlist = await stdregister(req.body).save();
            const options = { ordered: true };
            const uintlist = await invunits.insertMany(req.body, options);
            res.json(uintlist);
        } catch(err){
            //console.log(err);
            res.send("Error "+ err)
        }    
    },

}