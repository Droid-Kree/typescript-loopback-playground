module.exports = function (Movie) {
    Movie.list = function (cb) {
        var movies = [
            { title: 'Movie 0' },
            { title: 'Movie 1' },
            { title: 'Movie 2' }
        ];
        cb(null, movies);
    };
    Movie.remoteMethod('list', {
        http: { path: '/list', verb: 'get' },
        returns: { arg: 'list', type: 'string' }
    });
};
//# sourceMappingURL=movie.js.map