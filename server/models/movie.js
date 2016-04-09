module.exports = function (Movie) {
    Movie.create = function (id, title, cb) {
        var movie = {
            "data": {
                "id": id,
                "title": title
            }
        };
        cb(null, movie);
    };
    Movie.list = function (cb) {
        var movies = [
            { title: 'Movie 0' },
            { title: 'Movie 1' },
            { title: 'Movie 2' }
        ];
        cb(null, movies);
    };
    Movie.single = function (id, title, cb) {
        var single = {
            "data": {
                "id": id,
                "title": title
            }
        };
        cb(null, single);
    };
    Movie.update = function (id, title, cb) {
        var update = {
            "data": {
                "id": id,
                "title": title
            }
        };
        cb(null, update);
    };
    Movie.remoteMethod('create', {
        accepts: [{ arg: 'id', type: 'number' }, { arg: 'title', type: 'string' }],
        http: { path: '/create' },
        returns: { arg: 'create', type: 'string' }
    });
    Movie.remoteMethod('list', {
        http: { path: '/list', verb: 'get' },
        returns: { arg: 'list', type: 'string' }
    });
    Movie.remoteMethod('single', {
        http: { path: '/single', verb: 'get' },
        returns: { arg: 'single', type: 'string' }
    });
    Movie.remoteMethod('update', {
        http: { path: '/update', verb: 'put' },
        returns: { arg: 'update', type: 'string' }
    });
};
//# sourceMappingURL=movie.js.map