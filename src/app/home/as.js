var cors = require('cors');

// my function
var helloFn = function helloFn(req, res) {
    res.status(200)
        .send('Hello, Functions\n');
};

// CORS and Cloud Functions export logic
exports.hello = function hello(req, res) {
    var corsFn = cors();
    corsFn(req, res, function() {
        helloFn(req, res);
    });
}