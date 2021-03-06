/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../node_modules/definition-header/dist/index.d.ts" />
"use strict";
var loopback = require('loopback');
var boot = require('loopback-boot');
var opn = require('opn');
exports.app = loopback();
exports.app.globals = {};
exports.app.globals.MongoClient = require('mongodb').MongoClient;
var connectionString = 'mongodb://localhost:27017/loopback_playground';
exports.app.globals.MongoClient.connect(connectionString, function (err, db) {
    exports.app.globals.database = db;
});
exports.app.start = function () {
    // start the web server
    return exports.app.listen(function () {
        exports.app.emit('started');
        var baseUrl = exports.app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (exports.app.get('loopback-component-explorer')) {
            var explorerPath = exports.app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
        opn((baseUrl + explorerPath), { app: 'google chrome' });
    });
};
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(exports.app, __dirname, function (err) {
    if (err)
        throw err;
    // start the server if `$ node server.js`
    if (require.main === module)
        exports.app.start();
});
//# sourceMappingURL=server.js.map