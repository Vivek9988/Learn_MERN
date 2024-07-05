const http = require('http')
const PORT = 4000;
const url = require('url')

var data =
    [
        {
            "title": "Play Cricket",
            "priority": "low",
            "id": 1
        },

        {
            "title": "Learn React.JS",
            "priority": "high",
            "id": 2
        },

        {
            "title": "Visit Unimall",
            "priority": "medium",
            "id": 3
        }
    ]
const server = http.createServer((request, response) => {
    const parseURL = url.parse(request.url, true)
    const { pathname, query } = parseURL;

    const method = request.method

    if (pathname === "/todos" && method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        responst.end(JSON.stringify(data))
    }

    else if (pathname === '/todos/new' && method === "POST") {
        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString();
        })

        request.on('end', () => {
            const result = JSON.parse(body)
            console.log(result)
        })
    }
}
);
server.listen(PORT, () => {
    console.log("Hello Sir, I am a backend Server. I am hosted on Port", PORT)
}
)