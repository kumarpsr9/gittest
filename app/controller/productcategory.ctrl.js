const db = require("../model");
const procategory = db.productcat;

module.exports = {

    getproductcat : async (req, res, next) =>{
        try{
            const uintlist = await procategory.find();
            res.json(uintlist);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postproductcat : async(req, res, next) => {
        try{
            const uintlist = await procategory(req.body).save();
            // const options = { ordered: true };
            // const uintlist = await procategory.insertMany(req.body, options);
            res.json(uintlist);
        } catch(err){
            //console.log(err);
            res.send("Error "+ err)
        }    
    },

}