var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/:unit/:section/:file', function(req, res){
    var unit = req.params['unit'] 
    var section = req.params['section'] 
    var file = req.params['file'] 
    res.sendFile(__dirname + '/'+unit+'/'+section+'/'+file+'.html');
});


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})