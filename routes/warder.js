const express = require("express");
const router = express.Router();

const {
    getWardersByID,
    createWarder,
    updateWarder,
    deleteWarder
} = require("../controllers/warder.js");

router.get("/:W_ID", getWardersByID);

router.post("/", createWarder);

router.put("/:W_ID", updateWarder);

router.delete("/:W_ID", deleteWarder);

module.exports = router;