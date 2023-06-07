const { log } = require("console");
const http = require("http");

const students = [
  {
    id: 1,
    name: "Abdullah",
  },
  {
    id: 2,
    name: "Mahmud",
  },
];



const sentResponse = (res, {
    contentType = 'application/json',
    status = 200,
    body = {}
}) => {
  res.writeHead(status, { "Content-Type": contentType });
  res.write(
    JSON.stringify(body)
  );
  res.end();
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    sentResponse(res, {
        body: {
            msg: 'Homepage'
        }
    })
  } else if (req.url === "/students" && req.method === 'GET') {
    console.log(res.url);
    sentResponse(res, {body: students})
  } else if (req.url === "/students" && req.method === 'POST') {
    console.log(res.url);
    sentResponse(res, {body: students})
  } else {
    sentResponse(res, {
        status: 404,
        body: {
            message: '404! not found!'
        }
    })
  }
});

server.listen(4000, () => {
  console.log("listening on port 4000");
});
