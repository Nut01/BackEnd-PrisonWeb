const express = require("express");
const router = express.Router();

const {
    getPrisonerByID,
    createPrisoner,
    updatePrisoner,
    deletePrisoner
} = require("../controllers/prisoner.js");

router.get("/:P_ID", getPrisonerByID);

router.post("/", createPrisoner);

router.put("/:P_ID", updatePrisoner);

router.delete("/:P_ID", deletePrisoner);

module.exports = router;