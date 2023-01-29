const { getproductcat, postproductcat } = require("../controller/productcategory.ctrl");
const router = require("express").Router();

router.get("/", getproductcat);
router.post("/", postproductcat);

module.exports = router;

