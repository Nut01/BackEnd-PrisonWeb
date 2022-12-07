const express = require( "express" );
const cors = require( "cors" );
require( "dotenv" ).config();
global.__basedir = __dirname;
const PORT = process.env.PORT || 4000;
const app = express();

var corsOptions = {
    origin : "http://localhost:3000",
    //certificates : true
}

app.use( cors( corsOptions ) );
app.use( express.json() );
app.use( express.urlencoded( { extended : true } ) );

const auth = require( "./routes/auth" );
const prisoner = require( "./routes/prisoner" );
const prison = require( "./routes/prison" );
const room = require( "./routes/room" );
const warder = require( "./routes/warder" );
const zone = require( "./routes/zone" );

app.use("/auth", auth);
app.use("/prisoner", prisoner);
app.use("/prison", prison);
app.use("/room", room);
app.use("/warder", warder);
app.use("/zone", zone);

app.listen(PORT, () => {
    console.log( `Server is running on port ${PORT}`);
});