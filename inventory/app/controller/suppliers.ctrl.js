const db = require("../model");
const supinfo = db.suppliersinfo;
const suplayid = db.supplierid;
require("./commonfunction")();	

module.exports = {

    getsupplierincid : async (req, res, next) =>{
        try{
            const supres = await suplayid.create(
                {
                   _id: "supplierId",
                   seq: 0
                })
            
            res.json(supres);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    getsuppliers : async (req, res, next) =>{
        try{
            const supres = await supinfo.find();
            res.json(supres);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postsupplier : async(req, res, next) => {
        try{
            let mongoid = await supplieridinc("supplierId");
            req.body._id = mongoid;
            await supinfo(req.body).save();
            res.json(httpresponse(200));
        } catch(err){
            console.log(err);
            res.send(httpresponse(500))
        }    
    },

    getsupplierbyid : async (req, res, next) =>{
        try{
            const supres = await supinfo.find({"_id":req.params.supplierid});
            res.json(supres);
        } catch(err){
            res.send(httpresponse(500))
        }
    },

    getsupplierupdatebyid : async (req, res, next) =>{
        let _id = req.params.supplierid;
        delete (req.body._id);
        try{
            await supinfo.findOneAndUpdate({_id}, req.body, { useFindAndModify: false, new: true })
            res.json(httpresponse(200));
        } catch(err){
            console.log(err);
            res.send(httpresponse(500))
        }  
    },
}