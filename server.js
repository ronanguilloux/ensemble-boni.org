/*
 * server.js
 *
 * Distributed under terms of the MIT license.
 */

// $ npm install connect
var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8081);
// $ node server.js
// then: http://localhost:8081/
