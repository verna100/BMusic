  /* Load the HTTP library */
  var http = require("http");
  const cool = require('cool-ascii-faces')

//   /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);

var client_id = '937149dbdba441118e95164689d25c16'; // Your client id
var client_secret = 'dba383e293b4b708d5188a8e32bbcf8'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri