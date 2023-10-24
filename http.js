const http = require("http");
const fs = require("fs");

const posts = [
  { id: 1, tittle: "post one", body: "this is post 1" },
  { id: 2, tittle: "post two", body: "this is post 2" },
  { id: 3, tittle: "post three", body: "this is post 3" },
  { id: 4, tittle: "post four", body: "this is post 4" },
  { id: 5, tittle: "post five", body: "this is post 5" },
];

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/") {
    fs.readFile("index.html", (error, file) => {
      if (error) {
        response.writeHead(500, { "content-type": "text.html" });
        response.end("<h1>sorry, we have a problem</h1>");
      } else {
        response.writeHead(200, { "content-type": "text.html" });
        response.end(file);
      }
    });
    // response.writeHead(200, { "content-type": "text/html" });
    // response.end("<h1>Welcome</h1>");
    //   } else if (url === "/about") {
    //     response.writeHead(200, { "content-type": "text/html" });
    //     response.end("<h1>About</h1>");
  } else if (url === "/api/posts") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ succes: true, data: posts }));
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Page not found</h1>");
  }
});

server.listen(7000, () => {
  console.log("Server is listening on port 7000");
});
