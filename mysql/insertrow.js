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
        var sql = "insert into friends (id ,name,location) values(1, 'ivy', 'kochi')"
        connection.query(sql, function(err,suc){
            if(err){
                throw err
            }
            else{
                console.log("Row Inserted")
            }
        })
    }
})