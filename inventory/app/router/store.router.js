const {getstoreincid, getstores, poststore, getstorebyid, getstoreupdatebyid } = require("../controller/store.ctrl");
const router = require("express").Router();

//router.get("/createincid", getstoreincid);
router.get("/", getstores);
router.post("/", poststore);
router.get("/id/:storeid", getstorebyid);
router.post("/update/:storeid", getstoreupdatebyid);

module.exports = router;