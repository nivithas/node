var httpVariable = require('http')
var myServer = httpVariable.createServer(doItNow).listen(8888)

function doItNow(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("Hello from Node server!")
    res.end()
}
// myServer.listen(8888)