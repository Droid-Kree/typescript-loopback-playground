module.exports = function(Theater:any) {
  Theater.create = function (id, title, cb) {
    let theater = {
      "data": {
        "id": id,
        "title": title
      }
    };
    cb(null, theater);
  };

  Theater.list = async function (cb) {
    var theaters = [];
    var filter = {};

    var test = Theater.find(filter, function (err, theater) {
      theaters.push(theater);
      console.log('theater: ', theater);
    });

    await theaters;
    console.log('test: ', test);
    console.log('theaters: ', theaters);
    cb(null, theaters);
  };

  Theater.single = function (id, title, cb) {
    let single = {
      "data": {
        "id": id,
        "title": title
      }
    };
    cb(null, single);
  };

  Theater.update = function (id, title, cb) {
    let update = {
      "data": {
        "id": id,
        "title": title
      }
    };
    cb(null, update);
  };

  Theater.remoteMethod('create', {
    accepts: [{arg:'id', type:'number'}, {arg:'title', type:'string'}],
    http: {path: '/create'},
    returns: {arg: 'create', type: 'string'}
  });

  Theater.remoteMethod('list', {
    http: {path: '/list', verb: 'get'},
    returns: {arg: 'list', type: 'string'}
  });

  Theater.remoteMethod('single', {
    http: {path: '/single', verb: 'get'},
    returns: {arg: 'single', type: 'string'}
  });

  Theater.remoteMethod('update', {
    http: {path: '/update', verb: 'put'},
    returns: {arg:'update', type:'string'}
  });
};
