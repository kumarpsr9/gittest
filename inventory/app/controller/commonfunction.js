const db = require("../model");
const storeautoid = db.storeid;
const supplierid = db.supplierid;
const itemid = db.itemid;
var analysisapi = "https://apis.aditya.ac.in/analysis/";
module.exports = function() { 
    this.analysisurl = () =>{
        return analysisapi;
    }

    this.storeidinc = async (name) =>{
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
      var ret = await storeautoid.findOneAndUpdate({ _id: name }, { $inc: { seq: 1 } }, options);
      return ret.seq;
    }

    this.supplieridinc = async (name) =>{
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
      var ret = await supplierid.findOneAndUpdate({ _id: name }, { $inc: { seq: 1 } }, options);
      return ret.seq;
    }
    
    this.itemidinc = async (name) =>{
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
      var ret = await itemid.findOneAndUpdate({ _id: name }, { $inc: { seq: 1 } }, options);
      return ret.seq;
    }

    this.btoa=(str)=> {
        var buffer;
    
        if (str instanceof Buffer) {
          buffer = str;
        } else {
          buffer = new Buffer.from(str.toString(), 'binary');
        }
    
        return buffer.toString('base64');
    }

    this.httpresponse = (status) =>{
      if(status==200){
        var resresult = [{status, msg : "Successfully inserted or updated"}]
      } else if(status=='11000') {
        var resresult = [{status, msg : "E11000 duplicate key error"}]
      } else {
        var resresult = [{status, msg : "Internal server error"}]
      }
      return resresult
    }


}