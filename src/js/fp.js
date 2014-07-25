var identity = (x) => x

var compose = (f, g) => (x) => f(g(x))

var add1 = (x) => x + 1
var mul2 = (x) => x * 2
