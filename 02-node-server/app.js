const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.write(`
    <html>
    <head>
      <title>First App</title>
    </head>
          <body>
              <h1>Send Your Message</h1>
              <form action="/message" method="POST">
                <textarea name="message" rows="3" placeholder="Your message..."></textarea>
                <button style="display:block; margin-top:5px;" type="submit">Send</button>
              </form>
          </body>
      </html>
    `);
    return response.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    request.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFileSync("message.txt", message);
    });

    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }

  response.setHeader("Content-Type", "text/html");
  response.write(`
  <html>
  <head>
    <title>First App</title>
  </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
  `);
  response.end();
});

server.listen(3000);
