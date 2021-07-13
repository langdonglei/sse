let http = require("http")
http.createServer(function (req, res) {
    if (req.url === '/stream') {
        res.writeHead(200, {
            'content-type': 'text/event-stream',
            'cache-control': 'no cache',
            'connection': 'keep-alive',
            'access-control-allow-origin': '*'
        })
        let interval = setInterval(function () {
            res.write('data:' + new Date() + '\n\n')
        }, 1000)
        req.socket.addListener('close', function () {
            clearInterval(interval)
        })
    } else {
        res.end(req.url)
    }
}).listen(9910)
