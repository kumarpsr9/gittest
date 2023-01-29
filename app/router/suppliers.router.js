const { getsupplierincid, getsuppliers, postsupplier, getsupplierbyid, getsupplierupdatebyid } = require("../controller/suppliers.ctrl");
const router = require("express").Router();

//router.get("/createincid", getsupplierincid);
router.get("/", getsuppliers);
router.post("/", postsupplier);
router.get("/id/:supplierid", getsupplierbyid);
router.post("/update/:supplierid", getsupplierupdatebyid);

module.exports = router;