const connection = require("../database");

function getContracts(request,response)
{
    let sql = "SELECT * FROM test.contratos";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}

function getContractsByCoupon(request,response)
{
    let sql =  "SELECT * FROM test.contratos WHERE cupon='"+request.query.cupon+"'";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}

function getContractsByStatus(request,response)
{
    let sql =  "SELECT * FROM test.contratos WHERE estado='"+request.query.estado+"'";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}

function getContractsByOrigin(request,response)
{
    let sql =  "SELECT * FROM test.contratos WHERE origen='"+request.query.origen+"'";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}

function getCoupons(request,response)
{
    let sql =  "SELECT cupon FROM test.contratos GROUP BY cupon";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}

function getStatus(request,response)
{
    let sql =  "SELECT estado FROM test.contratos GROUP BY estado";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}

function getOrigin(request,response)
{
    let sql =  "SELECT origen FROM test.contratos GROUP BY origen";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}

module.exports = {getContracts, getContractsByCoupon, getContractsByOrigin, getContractsByStatus, getCoupons, getStatus, getOrigin}
