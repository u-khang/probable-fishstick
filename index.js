const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

function getFileName(pathname) {
    switch(pathname) {
        case('/'):
            return 'index.html'
        case('/index'):
            return 'index.html'
        case('/about'):
            return 'about.html'
        case('/contact-me'):
            return 'contact-me.html'
        case('/myCode'):
            return 'index.js'
        default:
            return '404.html'
    }
}

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url, true).pathname;
    const fileName = getFileName(pathname);

    let filePath = path.join(
        __dirname,
        fileName
    );
    
    fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(404, { "Content-Type": "text-html" });
			return res.end("404 not found");
        }
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
});

server.listen(8080)

