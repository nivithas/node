var http = require('http')
var url = require('url')

var server = http.createServer(serverFunction).listen(8878)

function serverFunction(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Working with Url")
    res.write("<br></br>")
    var myQuery = url.parse(req.url,true).query
    console.log(myQuery)
    var s = myQuery.status
    var t = myQuery.task
    res.write("status:" + s)
    res.write("<br></br>")
    res.write("task:" + t) 
    res.write("<br></br>")
    res.write(req.url)
    res.end()
}