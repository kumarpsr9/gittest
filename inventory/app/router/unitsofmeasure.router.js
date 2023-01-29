const { getunitsofmsrs, postunitsofmsrs } = require("../controller/unitsofmeasure.ctrl");
const router = require("express").Router();

router.get("/", getunitsofmsrs);
router.post("/", postunitsofmsrs);

module.exports = router;

