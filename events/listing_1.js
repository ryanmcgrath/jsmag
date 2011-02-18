var x = 1;
var foo = function(callbackfn) {
	return callbackfn(x * 2);
};

foo(function(x) {
	console.log(x);
});
