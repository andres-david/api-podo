const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host: "localhost", // TODO Cambiar el host
        user: "root", // TODO Cambiar el user
        password: "andres", // TODO Cambiar el password
        database: "test" // TODO Cambiar nombre del esquema
    }
);

connection.connect( (error) => {

    if( error ){
        console.log( error );
    }
    else{
        console.log('Conexión correcta');
    }
});

module.exports = connection;
