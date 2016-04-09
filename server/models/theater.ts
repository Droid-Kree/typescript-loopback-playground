let MongoClient = require('mongodb').MongoClient;
let connectionString = 'mongodb://localhost:27017/loopback_playground';
var database;

MongoClient.connect(connectionString, function (err, db) {
  database = db;
});

module.exports = function(Theater) {
  Theater.list = function (cb) {
    var theaters = [];
    var filter = {};
    theaters.push('1');
    theaters.push('2');
    theaters.push('3');
    Theater.find(filter, function (err, theater) {
      theaters.push(theater);
    });
    cb(null, theaters);
  };

  Theater.remoteMethod('list', {
    http: {path: '/list', verb: 'get'},
    returns: {arg: 'list', type: 'string'}
  })
};
