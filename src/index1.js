var http = require("http");
const querystring = require("querystring");
const port = 8081;
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  //let qurParam = querystring.parse(req.url.split("?")[1]);
  let url = req.url.split("?")[0];
  // console.log(qurParam);
  if (url == "/") {
    res.writeHead(300, { Location: "/welcome" });
    res.end();
  }
  if (url == "/welcome") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (url == "/contact") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404! Content Not Found</h1>");
  }
}
httpServer.listen(`${port}`, console.log(`Server is set up at Port ${port})`));

module.exports = httpServer;

/*
1. Create a Node Server that listens to PORT 8081.
2. Handle the following endpoints:
a.  /welcome - Should serve content of type text/plain -    Returned status should be 200 - Response should be Welcome to Dominos!
b.   /contact - Should serve content of type application/json    - Returned status should be 200 - Response should be

{  
 phone: '18602100000', 
  	email: 'guestcaredominos@jublfood.com' 
}
Any other routes besides the ones mentioned above should send status 404

*/
