const { getmanufacturers, postmanufacturer } = require("../controller/manufacturer.ctrl");
const router = require("express").Router();

router.get("/", getmanufacturers);
router.post("/", postmanufacturer);

module.exports = router;