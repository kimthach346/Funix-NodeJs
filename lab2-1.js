const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // Set a header to redirect
    res.setHeader("Content-Type", "text/html");
    //
    res.write(
      '<html><body><h1>Welcome!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body></html>'
    );
    return res.end();
  }
  if (url === "/users") {
    // Set a header to redirect
    res.setHeader("Content-Type", "text/html");
    //
    res.write("<html><ul><li>User 1</li><li>User 2</li></ul></html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const data = [];
    req.on("data", (user) => {
      data.push(user);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(data).toString();
      // console.log(parsedBody);    Return 'username=user-entered'
      console.log(parsedBody.split("=")[1]);
      // Need practice
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
      //
    });
  }
});
server.listen(3000);
