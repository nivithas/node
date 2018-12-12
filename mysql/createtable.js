var mysqldb = require('mysql')
var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sampledb'
})

connection.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("connected to mysql")
        var sql = "create table friends (name varchar(30), id int(8), location varchar(32))"
        connection.query(sql, function(err,suc){
            if(err){
                throw err
            }
            else{
                console.log("Table created")
            }
        })
    }
})