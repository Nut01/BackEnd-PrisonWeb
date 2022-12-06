const fs = require('fs');
const { PrismaClient }  = require('@prisma/client');
const prisma = new PrismaClient();

const getPrisonByName = async (req, res) => {
    const Prison_NAME = req.params.Prison_NAME;
    console.log("GET /api/prison/" + Prison_NAME);

    try {
        const prison = await prisma.prison.findUbnique({
            where: {
                Prison_NAME: Prison_NAME
            }
        })
        res.json(prison);
        res.status(200);
        console.log("Get Prison Successful");
        res.end();
    }
    catch (error) {
        res.json( { message: "ไม่พบคุก" } );
        res.status(400);
        res.end
    }
}

const createPrison = async (req, res) => {
    console.log("POST /api/prison");

    try {
        const{ Prison_NAME, Prison_PLACE, Prison_MAXNUMBER } = req.body;

        const prison = await prisma.prison.create({
            data: {
                Prison_NAME: Prison_NAME,
                Prison_PLACE: Prison_PLACE,
                Prison_MAXNUMBER: Prison_MAXNUMBER
            }
        })
        res.json(prison);
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500)
        res.end()
    }
}

const updatePrison = async (req, res) => {
    const Prison_NAME = req.body.Prison_NAME;
    console.log("PUT /api/prison/" + Prison_NAME);

    try {
        const {Prison_NAME, Prison_PLACE, Prison_MAXNUMBER} = req.body;

        const prison = await prisma.prison.update({
            where: {
                Prison_NAME : Prison_NAME
            },
            data: {
                Prison_PLACE : Prison_PLACE,
                Prison_MAXNUMBER : Prison_MAXNUMBER
            }
        })
        res.json(prison);
        res.status(200);
        console.log("Update Prison Successful");
        res.end();
    }
    catch (error) {
        res.json( { message: "ไม่พบคุก" } );
        res.status(400);
        res.end
    }
}

const deletePrison = async (req, res) => {
    const Prison_NAME = req.params.Prison_NAME;
    console.log("DELETE /api/prison/" + Prison_NAME);

    try {
        const prison = await prisma.prison.delete({
            where : {
                Prison_NAME : Prison_NAME
            }
        })
        res.json(prison);
        res.status(200);
        console.log("Delete Prison Successful");
        res.end();
    }
    catch (error) {
        res.json( { message: "ไม่พบคุก" } );
        res.status(400);
        res.end
    }
}

module.exports = {
    getPrisonByName,
    createPrison,
    updatePrison,
    deletePrison
}