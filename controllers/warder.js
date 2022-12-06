const fs = require('fs');
const { PrismaClient }  = require('@prisma/client');
const prisma = new PrismaClient();

const getWardersByID = async (req, res) => {
    const W_ID = parseInt(req.body.W_ID);
    console.log("GET /api/warder/" + W_ID);

    try {
        const warder = await prisma.warden.findUnique({
            where: {
                W_ID: W_ID
            }
        })
        res.json(warder);
        res.status(200);
        console.log("Get Warder Successful");
        res.end();
    }
    catch (error) {
        res.json( { message: "ไม่พบผู้คุม" } );
        res.status(400);
        res.end
    }
}

const createWarder = async (req, res) => {
    console.log("POST /api/warder");

    try {
        const { W_ID,W_PASSWORD, W_NAME, W_PRISONNAME, W_ZONEID } = req.body;

        const warder = await prisma.warder.create({
            data: {
                W_ID: W_ID,
                W_PASSWORD: W_PASSWORD,
                W_NAME: W_NAME,
                W_PRISONNAME: W_PRISONNAME,
                W_ZONEID: W_ZONEID
            }
        })
        res.json(warder);
    }
    catch  (error) {
        console.log("Error:", error);
        res.status(500)
        res.end()
    }
}

const updateWarder = async (req, res) => {
    const W_ID = parseInt(req.body.W_ID);
    console.log("PUT /api/warder/" + W_ID);

    try {
        const { W_PASSWORD, W_NAME, W_PRISONNAME, W_ZONEID } = req.body;

        const warder = await prisma.warder.update({
            where: {
                W_ID: W_ID
            },
            data: {
                W_PASSWORD: W_PASSWORD,
                W_NAME: W_NAME,
                W_PRISONNAME: W_PRISONNAME,
                W_ZONEID: W_ZONEID
            }
        })
        res.json(warder);
        res.status(200);
        console.log("Update Warder Successful");
        res.end();
    }
    catch (error) {
        console.log("Error:", error);
        res.json({ message: "ไม่พบผู้คุม" });
        res.status(500)
        res.end()
    }
}

const deleteWarder = async (req, res) => {
    const W_ID = parseInt(req.params.W_ID);
    console.log("DELETE /api/warder/" + W_ID);

    try {
        const warder = await prisma.warder.delete({
            where: {
                W_ID: W_ID
            }
        })
        res.json(warder);
        res.status(200);
        console.log("Delete Warder Successful");
        res.end();
    }
    catch (error) {
        console.log("Error:", error);
        res.json({ message: "ไม่พบผู้คุม" });
        res.status(500)
        res.end()
    }
}
