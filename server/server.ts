/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../node_modules/definition-header/dist/index.d.ts" />

import * as loopback from 'loopback';
import * as boot from 'loopback-boot';
import * as opn from 'opn';

export let app = loopback();

app.globals = {};

app.globals.MongoClient = require('mongodb').MongoClient;
let connectionString = 'mongodb://localhost:27017/loopback_playground';

app.globals.MongoClient.connect(connectionString, function (err, db) {
  app.globals.database = db;
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);

    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }

    opn( (baseUrl + explorerPath), { app: 'google chrome' } );
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});