var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password: ''
})

connection.connect(function(err){
    if(err){
        throw err
    }
    else{
        console.log("connected")
    }
})