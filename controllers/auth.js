const { PrismaClient } = require('@prisma/client')
const { response } = require('express')
const prisma = new PrismaClient()

const login = async(req, res) => {
    console.log('GET /api/login')
    console.log(req.body)

    const { W_ID, W_PASSWORD } = req.body
    try {
        const user = await prisma.warder.findUnique({
            where: {
                W_ID: parseInt(W_ID),
            }
        })
        console.log(user)
        if (user) {
            if (user.W_PASSWORD == W_PASSWORD) {
                res.json(user)
                res.status(200)
                console.log('Login Successful')
                res.end()
            }
            else {
                res.json(null)
                res.status(400)
                console.log('Incorrect Password')
                res.end()
            }
        }
        else {
            res.json(null)
            res.status(400)
            console.log('User not found')
            res.end()
        }
    }
    catch ( e ) {
        console.log(e)
    }
}

module.exports = {
    login
}