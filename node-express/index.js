const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  res.end("<html><body><h1>express example</h1></body></html>");
});

const server = http.createServer(app);
server.listen(
  port,
  hostname,
  () => {
    console.log(`the server is running at http://${hostname}:${port}`);
  });

