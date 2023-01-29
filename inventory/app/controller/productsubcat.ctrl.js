const db = require("../model");
const prosubcat = db.productsubcat;

module.exports = {

    getproductsubcat : async (req, res, next) =>{
        try{
            const uintlist = await prosubcat.find();
            res.json(uintlist);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postproductsubcat : async(req, res, next) => {
        try{
            const uintlist = await prosubcat(req.body).save();
            // const options = { ordered: true };
            // const uintlist = await procategory.insertMany(req.body, options);
            res.json(uintlist);
        } catch(err){
            //console.log(err);
            res.send("Error "+ err)
        }    
    },

}