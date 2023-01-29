const { getpackagetypes, postpackagetype } = require("../controller/packagetypes.ctrl");
const router = require("express").Router();

router.get("/", getpackagetypes);
router.post("/", postpackagetype);

module.exports = router;