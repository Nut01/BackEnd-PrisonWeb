const fs = require('fs');
const { PrismaClient }  = require('@prisma/client');
const prisma = new PrismaClient();

const getPrisonersByID = async (req, res) => {
    const P_ID = parseInt( req.params.P_ID);
    console.log(`GET /api/prisoners/${P_ID}`);

    try {
        const prisoner = await prisma.prisoner.findUnique({
            where: {
                P_ID: P_ID
            }
        });
        console.log("This Prisoner: ", prisoner);
        res.json(prisoner);
        res.status(200);
        console.log("Get Prisoner Successful");
        res.end();
    }
    catch ( error ) {
        console.log("Error: ", error);
        res.json({ message: "ไม่พบผู้ต้องขัง" });
        res.status(500);
        console.log("Prisoner not found");
        res.end();
    }
}

const createPrisoner = async (req, res) => {
    console.log("POST /api/prisoners");

    try {
        const { P_ID, P_NAME, P_BIRTHDAY, P_CRIME, P_PUNISHMENT, P_DATEIN, P_DATEOUT, P_PRISONNAME, P_ZONEID, P_ROOMID } = req.body;

        const prisoner = await prisma.prisoner.create({
            data: {
                P_ID: P_ID,
                P_NAME: P_NAME,
                P_BIRTHDAY: P_BIRTHDAY,
                P_CRIME: P_CRIME,
                P_PUNISHMENT: P_PUNISHMENT,
                P_DATEIN: P_DATEIN,
                P_DATEOUT: P_DATEOUT,
                P_PRISONNAME: P_PRISONNAME,
                P_ZONEID: P_ZONEID,
                P_ROOMID: P_ROOMID
            }
        })
    }
    catch ( errror ) {
        console.log("Error:", error);
        res.status(500)
        res.end()
    }
}

const updatePrisoner = async (req, res) => {
    const P_ID = parseInt( req.body.P_ID );
    console.log(`PUT /api/prisoners/${P_ID}`);

    try {
        const { P_NAME, P_BIRTHDAY, P_CRIME, P_PUNISHMENT, P_DATEIN, P_DATEOUT, P_PRISONNAME, P_ZONEID, P_ROOMID } = req.body;
        
        const prisoner = await prisma.prisoner.update({
            where: {
                P_ID : P_ID,
            },
            data: {
                P_NAME: P_NAME,
                P_BIRTHDAY: P_BIRTHDAY,
                P_CRIME: P_CRIME,
                P_PUNISHMENT: P_PUNISHMENT,
                P_DATEIN: P_DATEIN,
                P_DATEOUT: P_DATEOUT,
                P_PRISONNAME: P_PRISONNAME,
                P_ZONEID: P_ZONEID,
                P_ROOMID: P_ROOMID
            }
        })

        res.json(prisoner);
        res.status(200);
        console.log("Update Prisoner Successful");
        res.end();
    }
    catch ( error ) {
        console.log("Error: ", error);
        res.json({ message: "ไม่พบผู้ต้องขัง" });
        res.status(500);
        console.log("Prisoner not found");
        res.end();
    }
}

const deletePrisoner = async (req, res) => {
    const P_ID = parseInt( req.params.P_ID );
    console.log(`DELETE /api/prisoners/${P_ID}`);

    try {
        const prisoner = await prisma.prisoner.delete({
            where: {
                P_ID: P_ID
            }
        })
        res.json(prisoner);
        res.status(200);
        console.log("Delete Prisoner Successful");
        res.end();
    }
    catch ( error ) {
        console.log("Error: ", error);
        res.json({ message: "ไม่พบผู้ต้องขัง" });
        res.status(500);
        console.log("Prisoner not found");
        res.end();
    }
}

module.exports = {
    getPrisonersByID,
    createPrisoner,
    updatePrisoner,
    deletePrisoner
}
