const express = require("express");
const router = express.Router();

const {
    getZoneByID,
    createZone,
    updateZone,
    deleteZone
} = require("../controllers/zone.js");

router.get("/:Z_ID", getZoneByID);

router.post("/", createZone);

router.put("/:Z_ID", updateZone);

router.delete("/:Z_ID", deleteZone);

module.exports = router;