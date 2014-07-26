var identity = (x) => x;

var compose = (f, g) => (x) => f(g(x));

var add1 = (x) => x + 1;
var mul2 = (x) => x * 2;

var flip = (f) => (...args) => f(...args.reverse());

var logged = (f) =>
    function(...args) {
        console.log("Calling " + f.name + " with " + args);
        return f(...args);
    };

var complement = (predicate) =>
    function(...args) {
        return !predicate(...args);
    };
