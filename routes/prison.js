const express = require("express");
const router = express.Router();

const {
    getPrisonByName,
    createPrison,
    updatePrison,
    deletePrison
} = require("../controllers/prison.js");

router.get("/:Prison_NAME", getPrisonByName);

router.post("/", createPrison);

router.put("/:Prison_NAME", updatePrison);

router.delete("/:Prison_NAME", deletePrison);

module.exports = router;