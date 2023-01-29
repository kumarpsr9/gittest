const {getitemincid, getitems, postitem, getitembyid, getitemupdatebyid } = require("../controller/items.ctrl");
const router = require("express").Router();

//router.get("/createincid", getitemincid);
router.get("/", getitems);
router.post("/", postitem);
router.get("/id/:itemcode", getitembyid);
router.post("/update/:itemcode", getitemupdatebyid);

module.exports = router;