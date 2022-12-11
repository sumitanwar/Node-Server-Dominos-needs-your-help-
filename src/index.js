const express = require("express");
const Welcomeroutes = require("../Routes/user");
const Contactroutes = require("../Routes/contact");

const port = 8081;
const app = express();
app.use("/welcome", Welcomeroutes);
app.use("/contact", Contactroutes);
app.listen(`${port}`, console.log(`Server is set up at Port ${port})`));

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
