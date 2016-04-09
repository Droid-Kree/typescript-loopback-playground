/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../node_modules/definition-header/dist/index.d.ts" />
"use strict";
var loopback = require('loopback');
var boot = require('loopback-boot');
var open = require('open');
exports.app = loopback();
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
        console.log('STARTED: ', explorerPath);
        open(explorerPath);
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