function requestHandler(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/" || url === "/users") {
    response.write(
      `
            <html>
                <head>
                    <title>Homepage</title>
                </head>
                <body>
                    <h1>Homepage (User List)</h1>
                    <ul>
                        <li>User 1</li>
                    </ul>
                    <form action="/users/new" method="POST">
                        <input type="text" name="username" placeholder="Username" />
                        <button type="submtit">Register</button>
                    </form>
                </body>
            </html>
            `
    );

    return response.end();
  }

  if (url === "/users") {
    response.write(
      `
              <html>
                  <head>
                      <title>Homepage</title>
                  </head>
                  <body>
                      <h1>Homepage (User List)</h1>
                      <ul>
                          <li>User 1</li>
                      </ul>
                  </body>
              </html>
              `
    );

    return response.end();
  }

  if (url == "/users/new" && method === "POST") {
    const body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const userName = parsedBody.split("=")[1];

      console.log(userName);

      response.statusCode = 302;
      response.setHeader("Location", "/");
      return response.end();
    });
  }
}

module.exports = {
  handler: requestHandler,
};
