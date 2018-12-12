var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

connection.connect(function(err){
    if(err){
        throw err
    }
    else{
        console.log("connected to mysql server")
        console.log("creating db....")
        connection.query("create database sampledb", function(err,suc){
            if(err){
                throw err
            }
            else{
                console.log("database created...")
            }
        })
    }
})