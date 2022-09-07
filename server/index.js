//Create a server that can send back static files
import http from 'http';
import url from 'url';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import mimeTypes from 'mime-types';
lookup = mimeTypes.lookup;

const server = http.createServer((req, res) => {
	//handle the request and send back a static file
	//from a folder called `public`
	let parsedURL = url.parse(req.url, true);
	//remove the leading and trailing slashes
	let path = parsedURL.path.replace(/^\/+|\/+$/g, '');
	/**
	 *  /
	 *  /index.html
	 *
	 *  /main.css
	 *  /main.js
	 */
	if (path == '') {
		path = 'index.html';
		let file = __dirname + '/../build/' + path;
		fs.readFile(file, 'utf-8', (err, data) => {
			if (err) {
				console.log(err);
				return res.statusCode(500).send('Some error happened');
			} else {
				res.setHeader('X-Content-Type-Options', 'nosniff');
				let mime = lookup(path);
				res.writeHead(200, { 'Content-type': mime });
				res.send(
					data.replace(
						'<div id="root"></div>',
						`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
					)
				);
			}
		});
	} else {
		let file = __dirname + '/../build/' + path;
		//async read file function uses callback
		fs.readFile(file, function (err, content) {
			if (err) {
				console.log(`File Not Found ${file}`);
				res.writeHead(404);
				res.end();
			} else {
				//specify the content type in the response
				console.log(`Returning ${path}`);
				res.setHeader('X-Content-Type-Options', 'nosniff');
				let mime = lookup(path);
				res.writeHead(200, { 'Content-type': mime });
				res.end(content);
			}
		});
	}
});
let port = process.env.PORT || 1234;
server.listen(port, 'localhost', () => {
	console.log(`Listening on port ${port}`);
});

// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from '../src/App';

// function reqListener(req, res, next) {
// 	const url = req.url;

// 	if (url === '^/$') {
// 		res.writeHead(200, { 'Content-Type': 'text/html' });
// 		fs.readFile(path.join(__dirname + '/index.html'), 'utf-8', (err, data) => {
// 			res.end(
// 				data.replace(
// 					'<div id="root"></div>',
// 					`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
// 				)
// 			);
// 		});
// 	}else {
//         const readStream = fs.createReadStream(`./design${req.url}`);
//         readStream.pipe(res);
//     }
// }

// const server = http.createServer(reqListener);

// server.listen(3000, () => console.log('Listening on port 3000'));

// require('ignore-styles');

// require('@babel/register')({
//     ignore: [/(node_modules)/],
//     presets: ['@babel/preset-env', '@babel/preset-react']
// })

// require('./server');
