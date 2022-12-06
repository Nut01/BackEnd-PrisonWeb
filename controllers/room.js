const fs = require('fs');
const { PrismaClient }  = require('@prisma/client');
const prisma = new PrismaClient();

const getRoomByID = async (req, res) => {
    const R_ID = parseInt(req.body.R_ID);
    console.log("GET /api/room/" + R_ID);

    try {
        const room = await prisma.room.findUnique({
            where: {
                R_ID: R_ID
            }
        })
        res.json(room);
        res.status(200);
        console.log("Get Room Successful");
        res.end();
    }
    catch (error) {
        res.json( { message: "ไม่พบห้อง" } );
        res.status(400);
        res.end
    }
}

const createRoom = async (req, res) => {
    console.log("POST /api/room");

    try {
        const { R_ID, R_NAME, R_ZONEID } = req.body;

        const room = await prisma.room.create({
            data: {
                R_ID: R_ID,
                R_NAME: R_NAME,
                R_ZONEID: R_ZONEID
            }
        })
        res.json(room);
        res.status(200);
        console.log("Create Room Successful");
        res.end();
    }
    catch  (error) {
        console.log("Error:", error);
        res.status(500)
        res.end()
    }
}

const updateRoom = async (req, res) => {
    const R_ID = parseInt(req.body.R_ID);
    console.log("PUT /api/room/" + R_ID);

    try {
        const { R_NAME, R_ZONEID } = req.body;

        const room = await prisma.room.update({
            where: {
                R_ID: R_ID
            },
            data: {
                R_NAME: R_NAME,
                R_ZONEID: R_ZONEID
            }
        })
        res.json(room);
        res.status(200);
        console.log("Update Room Successful");
        res.end();
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500)
        res.end()
    }
}

const deleteRoom = async (req, res) => {
    const R_ID = parseInt(req.body.R_ID);
    console.log("DELETE /api/room/" + R_ID);

    try {
        const room = await prisma.room.delete({
            where: {
                R_ID: R_ID
            }
        })
        res.json(room);
        res.status(200);
        console.log("Delete Room Successful");
        res.end();
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500)
        res.end()
    }
}

module.exports = {
    getRoomByID,
    createRoom,
    updateRoom,
    deleteRoom
}