const http = require("http");

USERS = [
    {"id":1, "name":"Jihan Ahmed"},
    {"id":2, "name":"Maryam Mohamed"},
    {"id":3, "name":"Mostafa Saad"}
];

const server = http.createServer((req, res)=> {
    const url = req.url;
    if(url === "/" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <h1>Home Page<h1>
            <p>Welcome to home page</p>
            `);
    }
    else if(url === "/users" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(USERS));
    }
    else if(url ==="/users" && req.method === "POST") {
        let body = [];

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const newUser = JSON.parse(body);
                USERS.push(newUser);

                res.setHeader("Content-Type", "application/json");
                res.statusCode = 201;
                res.end(JSON.stringify({
                    message: "User added successfully",
                    user: newUser,
                }));
            } catch(error) {
                res.statusCode = 400; // Bad Request
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Invalid JSON data" }));
            }
        })
    }
    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(8000, ()=> {
    console.log("Server is connected and listening on port 8000 ...");
});
