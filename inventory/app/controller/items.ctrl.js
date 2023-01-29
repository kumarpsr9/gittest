const db = require("../model");
const itemsdb = db.iteminfo;
const itemincid = db.itemid;

require("./commonfunction")();
module.exports = {

    getitemincid : async (req, res, next) =>{
        try{
            const itemlist = await itemincid.create(
                {
                   _id: "itemCode",
                   seq: 0
                })
            
            res.json(itemlist);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    getitems : async (req, res, next) =>{
        try{
            const itemlist = await itemsdb.find();
            res.json(itemlist);
        } catch(err){
            res.send("Error "+ err)
        }
    },

    postitem : async(req, res, next) => {
        try{
            let itemid = await itemidinc("itemCode");
            req.body.itemCode = itemid;
            await itemsdb(req.body).save();
            res.json(httpresponse(200));
        } catch(err){
            //console.log(err);
            res.send(httpresponse(500))
        }    
    },

    getitembyid : async (req, res, next) =>{
        try{
            const itemres = await itemsdb.find({"itemCode":req.params.itemcode});
            res.json(itemres);
        } catch(err){
            res.send(httpresponse(500))
        }
    },

    getitemupdatebyid : async (req, res, next) =>{
        let itemCode = req.params.itemcode;
        delete (req.body.itemCode);
        try{
            await itemsdb.findOneAndUpdate({itemCode}, req.body, { useFindAndModify: false, new: true })
            res.json(httpresponse(200));
        } catch(err){
            res.send(httpresponse(500))
        }
    },
}