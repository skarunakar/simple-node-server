
var jsonObject 
//Lets define a port we want to listen to

const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
	var query = require('url').parse(req.url,true).query;
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    console.log(query);
    res.write(JSON.stringify(require("./record"+query.dataSet+".json")));
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*
 [
 '{{repeat(2, 100)}}',
 {
 _id: '{{repeat(integer(0, 100))}}',
 name: '{{firstName()}} {{surname()}}',
 gender: '{{gender()}}',
 age: '{{integer(20, 40)}}',
 marks: '{{integer(0, 100)}}'
 }
 ]*/