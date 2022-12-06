const fs = require('fs');
const { PrismaClient }  = require('@prisma/client');
const prisma = new PrismaClient();

const getZoneByID = async (req, res) => {
    const Z_ID = parseInt(req.body.Z_ID);
    console.log("GET /api/zone/" + Z_ID);

    try {
        const zone = await prisma.zone.findUnique({
            where: {
                Z_ID: Z_ID
            }
        })
        res.json(zone);
        res.status(200);
        console.log("Get Zone Successful");
        res.end();  
    }
    catch (error) {
        res.json( { message: "ไม่พบโซน" } );
        res.status(400);
        res.end
    }
}

const createZone = async (req, res) => {
    console.log("POST /api/zone");

    try {
        const { Z_ID, Z_NAME, Z_PRISONNAME } = req.body;

        const zone = await prisma.zone.create({
            data: {
                Z_ID: Z_ID,
                Z_NAME: Z_NAME,
                Z_PRISONNAME: Z_PRISONNAME
            }
        })
        res.json(zone);
    }
    catch  (error) {
        console.log("Error:", error);
        res.status(500)
        res.end()
    }
}

const updateZone = async (req, res) => {
    const Z_ID = parseInt(req.body.Z_ID);
    console.log("PUT /api/zone/" + Z_ID);

    try {
        const { Z_NAME, Z_PRISONNAME } = req.body;

        const zone = await prisma.zone.update({
            where: {
                Z_ID: Z_ID
            },
            data: {
                Z_NAME: Z_NAME,
                Z_PRISONNAME: Z_PRISONNAME
            }
        })
        res.json(zone);
        res.status(200);
        console.log("Update Zone Successful");
        res.end();
    }
    catch (error) {
        res.json( { message: "ไม่พบโซน" } );
        res.status(400)
        res.end()
    }
}

const deleteZone = async (req, res) => {
    const Z_ID = parseInt(req.body.Z_ID);
    console.log("DELETE /api/zone/" + Z_ID);

    try {
        const zone = await prisma.zone.delete({
            where: {
                Z_ID: Z_ID
            }
        })
        res.json(zone);
        res.status(200);
        console.log("Delete Zone Successful");
        res.end();
    }
    catch (error) {
        res.json( { message: "ไม่พบโซน" } );
        res.status(400)
        res.end()
    }
}
