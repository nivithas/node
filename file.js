var http = require('http')
var file = require('fs')

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("working with fs module")

    file.readFile('hello.txt',function(err,data){
        if(err){
            throw err
        }
        res.write("<br></br>")
        res.write(data)
        file.writeFile('hello3.txt', data,function(err){
            console.log(err)
        })
        res.end()
    })
}).listen(8888)