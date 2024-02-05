let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer((req, res) => {
	let path = url.parse(req.url, true).pathname;
    console.log(url.parse(req.url, true).pathname);

	let filename;
	if (path === "/") {``
		filename = "./index.html";
	} else if (path === "/about") {
		filename = "./about.html";
	} else if (path === "/contact-me") {
		filename = "./contact-me.html";
	} else {
		filename = "./404.html";
	}

	fs.readFile(filename, function (err, data) {
		if (err) {
			res.writeHead(404, { "Content-Type": "text-html" });
			return res.end("404 not found");
		}
		res.writeHead(200, { "Content-Type": "text-html" });
		res.write(data);
		res.end();
	});
}).listen(8080);