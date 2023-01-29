const dbConfig = require("../config/db.mongo.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, useCreateIndex: true})
db.con = mongoose.connection

db.units = require("./unitsofMeasure")(mongoose);
db.productcat = require("./productCategory")(mongoose);
db.pakagetypes = require("./packageType")(mongoose);
db.productsubcat = require("./productSubCategory")(mongoose);
db.producttypes = require("./productType")(mongoose);
db.supplierid = require("./supplierid")(mongoose);
db.suppliersinfo = require("./suppliers")(mongoose);
db.storeid = require("./storeid")(mongoose);
db.storeinfo = require("./stores")(mongoose);
db.itemid = require("./itemid")(mongoose);
db.iteminfo = require("./items")(mongoose);
db.publisherinfo = require("./publisher")(mongoose);
db.manufacturerinfo = require("./manufacturer")(mongoose);

module.exports = db;
