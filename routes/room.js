const express = require("express");
const router = express.Router();

const {
    getRoomByID,
    createRoom,
    updateRoom,
    deleteRoom
} = require("../controllers/room.js");

router.get("/:R_ID", getRoomByID);

router.post("/", createRoom);

router.put("/:R_ID", updateRoom);

router.delete("/:R_ID", deleteRoom);

module.exports = router;