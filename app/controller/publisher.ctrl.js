const db = require("../model");
const publisherdb = db.publisherinfo;
require("./commonfunction")();	

module.exports = {

    getpublishers : async (req, res, next) =>{
        try{
            let publishers = await publisherdb.find();
            res.json(publishers);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postpublisher : async(req, res, next) => {
        try{
            let insertpublisher = await publisherdb(req.body).save();
            res.json(insertpublisher);
        } catch(err){
            //console.log(err.code);
            if(err.code=='11000'){
                res.send(httpresponse(err.code))
            } else {
                res.send(httpresponse(500))
            }
        }    
    },

}