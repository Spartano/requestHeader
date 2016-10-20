var express = require('express');
var app = express();

var port = process.env.PORT || 3500;
console.log(process.env.PORT);

app.get('/', function(req, res){
    
    res.jsonp({
        ipaddress: req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
       
    });
    
    console.log(req.headers)
    
})

app.listen(port, function(){
    
    console.log('Listening to port ' + port)
})