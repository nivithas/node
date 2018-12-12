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
        var sql = "insert into friends (id ,name,location) values ?"
        var records = [
            [2, 'kii','tvm'],
            [3, 'kiik','alpy'],
            [2, 'akii','pta'],
        ]
        connection.query(sql, [records],function(err,suc){
            if(err){
                throw err
            }
            else{
                console.log("3 Rows Inserted")
            }
        })
    }
})