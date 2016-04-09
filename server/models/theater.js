module.exports = function (Theater) {
    Theater.list = function (cb) {
        var theaters = [];
        var filter = {};
        Theater.find(filter, function (err, theater) {
            console.log('theater: ', theater);
            theaters.push(theater);
        });
        console.log('theaters: ', theaters);
        cb(null, theaters);
    };
    Theater.remoteMethod('list', {
        http: { path: '/list', verb: 'get' },
        returns: { arg: 'list', type: 'string' }
    });
};
//# sourceMappingURL=theater.js.map