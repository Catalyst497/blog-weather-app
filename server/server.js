// Hi. Freelancer here! You do not need to create routes for each of the components(e.g Fabrication.html) from the backend (i.e here).
// The only job of the backend here is to render the indexClient.html file and but the index.js on the client renders the components onclick of the links and on page load.
// In fact you cannot render components from the backend for reasons I can't explain in a comment.
// Thats just not how js, node.js and single page rendering works.
// I hope you understand what I was trying to say here.
// ... and yes, I have tested your method and and realised that it does not work before I wrote this comment. Thank you.
// You can find where I handled the components in client/index.js

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
//npm i mime-types if dependencies not already installed.
const lookup = require('mime-types').lookup;

const server = http.createServer((req, res) => {
	// const headers = {
	// 	'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
	// 	'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
	// 	'Access-Control-Max-Age': 2592000, // 30 days
	// 	'Content-Type': 'text/html',
	// };
	// res.writeHead(200, headers);

	//handle the request and send back a static file
	//from a folder called `public`
	let parsedURL = url.parse(req.url, true);
	//remove the leading and trailing slashes
	let path = parsedURL.path.replace(/^\/+|\/+$/g, '');
	if (
		path == '' ||
		path == 'Home' ||
		path == 'Solution' ||
		path == 'Fabrication' ||
		path == 'Utilisation'
	) {
		path = 'indexClient.html';
	}
	console.log(`Requested path ${path} `);

	let file = __dirname + '/../client/' + path;
	//async read file function uses callback
	fs.readFile(file, function (err, content) {
		if (err) {
			console.log("C'est l'heure d'une pause! " + err);
		} else {
			console.log(`Returning ${path}`);
			res.setHeader('X-Content-Type-Options', 'nosniff');
			let mime = lookup(path);
			res.writeHead(200, { 'Content-type': mime });

			res.end(content);
		}
	});

	// if (req.url === '/') {
	// 	console.log(__dirname);
	// 	fs.readFile(
	// 		path.join(__dirname + '/../client/indexClient.html'),
	// 		'utf8',
	// 		(err, data) => {
	// 			if (err) {
	// 				throw "C'est l'heure d'une pause! " + err;
	// 			}
	// 			res.write(data);
	// 			res.end();
	// 		}
	// 	);
	// } else if (req.url === '/Fabrication') {
	// 	console.log(__dirname);
	// 	fs.readFile(
	// 		path.join(__dirname + '/public/Fabrication.html'),
	// 		'utf8',
	// 		(err, data) => {
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.write(data);
	// 			res.end();
	// 		}
	// 	);
	// } else if (req.url === '/Utilisation') {
	// 	console.log(__dirname);
	// 	fs.readFile(
	// 		path.join(__dirname + '/public/Utilisation.html'),
	// 		'utf8',
	// 		(err, data) => {
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.write(data);
	// 			res.end();
	// 		}
	// 	);
	// } else if (req.url === '/Elimination') {
	// 	console.log(__dirname);
	// 	fs.readFile(
	// 		path.join(__dirname + '/public/Elimination.html'),
	// 		'utf8',
	// 		(err, data) => {
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.write(data);
	// 			res.end();
	// 		}
	// 	);
	// } else if (req.url === '/Solution') {
	// 	console.log(__dirname);
	// 	fs.readFile(
	// 		path.join(__dirname + '/public/Solution.html'),
	// 		'utf8',
	// 		(err, data) => {
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.write(data);
	// 			res.end();
	// 		}
	// 	);
	// } else {
	// 	res.write("<p>Erreur: La page n'existe pas</p>");
	// 	res.end();
	// }
});

const port = process.env.PORT || 4200; 
server.listen(port, () => {
	console.log('Loaded on port:' + port);
});
