const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.write('Hello node1');
    res.write('Hello node2');
    res.write('Hello node3');
    res.write('Hello node4');
    res.end('Hello node5');
});
server.listen(3065, () => {
    console.log('서버 실행중');
});