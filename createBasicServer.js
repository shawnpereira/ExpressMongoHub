const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("hello i am shawn");
    resp.end();
  })
  .listen(4500);
