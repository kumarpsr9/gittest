require("dotenv").config();
const baseurl = "/api/";
const express = require('express');
const port = process.env.PORT;
const app =express();
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

const invunits = require("./router/unitsofmeasure.router")
const productcat = require("./router/productcategory.router")
const packagetype = require("./router/packagetypes.router")
const productsubcat = require("./router/productsubcat.router")
const protype = require("./router/producttype.router")
const storedata = require("./router/store.router")
const supplierdata = require("./router/suppliers.router")
const publisherdata = require("./router/publisher.router")
const manufacturerdata = require("./router/manufacturer.router")
const itemdata = require("./router/items.router")

app.use(express.json({limit: '50mb'}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(baseurl+"unitsofmeasure", invunits);
app.use(baseurl+"productcategory", productcat);
app.use(baseurl+"packagetype", packagetype);
app.use(baseurl+"productsubcategory", productsubcat);
app.use(baseurl+"producttype", protype);
app.use(baseurl+"store", storedata);
app.use(baseurl+"supplier", supplierdata);
app.use(baseurl+"publisher", publisherdata);
app.use(baseurl+"manufacturer", manufacturerdata);
app.use(baseurl+"items", itemdata);

app.get("/api/", (req, res)=>{
    res.json({
        success:1,
        message :"this is rest apis working"
    })
})

app.listen(port, ()=>{
    console.log(`Server up and running on port : http://localhost:${port}/api/`)
})