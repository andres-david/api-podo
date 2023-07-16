const express = require("express");
const cors = require("cors");
const contractsRouters = require("./routes/contracts.router");
const errorHandling = require("./error/errorHandling");

const app = express();

// const PORT = process.env.PORT || 3000
app.set( "port", process.env.PORT || 3000 );


app.use( cors() );
app.use( express.urlencoded( {extended: false} ) );
app.use( express.json() );
app.use( contractsRouters );
app.use( function( req, res, next ){
    res.status(404).json({error: true,
                            codigo: 404,
                            message: "Endponint doesn't found"});
});

app.use( errorHandling );

// app.listen(PORT, () => {
//     console.log(`Server listen on port:${PORT}`)
// })


module.exports = app;
