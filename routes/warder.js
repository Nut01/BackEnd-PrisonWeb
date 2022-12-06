const express = require("express");
const router = express.Router();

const {
    getWarderByID,
    createWarder,
    updateWarder,
    deleteWarder
} = require("../controllers/warder.js");

router.get("/:W_ID", getWarderByID);

router.post("/", createWarder);

router.put("/:W_ID", updateWarder);

router.delete("/:W_ID", deleteWarder);

module.exports = router;