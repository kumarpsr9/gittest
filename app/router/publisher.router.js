const { getpublishers, postpublisher } = require("../controller/publisher.ctrl");
const router = require("express").Router();

router.get("/", getpublishers);
router.post("/", postpublisher);

module.exports = router;