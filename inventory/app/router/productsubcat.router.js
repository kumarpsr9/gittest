const { getproductsubcat, postproductsubcat } = require("../controller/productsubcat.ctrl");
const router = require("express").Router();

router.get("/", getproductsubcat);
router.post("/", postproductsubcat);

module.exports = router;

