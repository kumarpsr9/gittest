const db = require("../model");
const storedata = db.storeinfo;
const storeautoid = db.storeid;

require("./commonfunction")();
module.exports = {

    getstoreincid : async (req, res, next) =>{
        try{
            const storelist = await storeautoid.create(
                {
                   _id: "storeId",
                   seq: 0
                })
            
            res.json(storelist);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    getstores : async (req, res, next) =>{
        try{
            const storelist = await storedata.find();
            res.json(storelist);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    poststore : async(req, res, next) => {
        try{
            let mongoid = await storeidinc("storeId");
            req.body._id = mongoid;
            await storedata(req.body).save();
            res.json(httpresponse(200));
        } catch(err){
            //console.log(err);
            res.send(httpresponse(500))
        }    
    },

    getstorebyid : async (req, res, next) =>{
        try{
            const storeres = await storedata.find({"_id":req.params.storeid});
            res.json(storeres);
        } catch(err){
            res.send(httpresponse(500))
        }
    },

    getstoreupdatebyid : async (req, res, next) =>{
        let _id = req.params.storeid;
        delete (req.body._id);
        try{
            await storedata.findOneAndUpdate({_id}, req.body, { useFindAndModify: false, new: true })
            res.json(httpresponse(200));
        } catch(err){
            res.send(httpresponse(500))
        }
    },
}