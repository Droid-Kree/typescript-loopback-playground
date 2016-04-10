var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
module.exports = function (Theater) {
    Theater.create = function (id, title, cb) {
        var theater = {
            "data": {
                "id": id,
                "title": title
            }
        };
        cb(null, theater);
    };
    Theater.list = function (cb) {
        return __awaiter(this, void 0, void 0, function* () {
            var theaters = [];
            var filter = {};
            var test = Theater.find(filter, function (err, theater) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log('before return');
                    return theater;
                });
            });
            console.log('test: ', test);
            console.log('theaters: ', theaters);
            cb(null, theaters);
        });
    };
    Theater.single = function (id, title, cb) {
        var single = {
            "data": {
                "id": id,
                "title": title
            }
        };
        cb(null, single);
    };
    Theater.update = function (id, title, cb) {
        var update = {
            "data": {
                "id": id,
                "title": title
            }
        };
        cb(null, update);
    };
    Theater.remoteMethod('create', {
        accepts: [{ arg: 'id', type: 'number' }, { arg: 'title', type: 'string' }],
        http: { path: '/create' },
        returns: { arg: 'create', type: 'string' }
    });
    Theater.remoteMethod('list', {
        http: { path: '/list', verb: 'get' },
        returns: { arg: 'list', type: 'string' }
    });
    Theater.remoteMethod('single', {
        http: { path: '/single', verb: 'get' },
        returns: { arg: 'single', type: 'string' }
    });
    Theater.remoteMethod('update', {
        http: { path: '/update', verb: 'put' },
        returns: { arg: 'update', type: 'string' }
    });
};
//# sourceMappingURL=theater.js.map