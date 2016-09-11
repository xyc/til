http://stackoverflow.com/questions/22321769/function-prototype-apply-bind-usages

This is used to fix the first parameter of .apply.

For example, when you get the max value from an array, you do:

var max_value = Math.max.apply(null, [1,2,3]);
But you want to get the first parameter fixed to null, so you could create an new function by:

var max = Function.prototype.apply.bind(Math.max, null);
then you could just do:

var max_value = max([1,2,3]);

Also see nodeschool/functional-javascript-workshop/Function-Call
