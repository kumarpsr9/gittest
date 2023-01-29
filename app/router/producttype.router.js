const { getproducttypes, postproducttype } = require("../controller/producttype.ctrl");
const router = require("express").Router();

router.get("/", getproducttypes);
router.post("/", postproducttype);

module.exports = router;