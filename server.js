/*
 * server.js
 *
 * Distributed under terms of the MIT license.
 */

// npm install connect serve-static
// node server.js
// then: http://localhost:8081/
//
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8081);
console.log("open http://localhost:8081/index.html");
