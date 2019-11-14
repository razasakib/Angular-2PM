;
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function (arg1) {
        return arg1;
    };
    ;
    class_one.prototype.fun_two = function (arg2) {
        return arg2;
    };
    ;
    return class_one;
}());
;
console.log(new class_one().fun_one("Hello"));
console.log(new class_one().fun_two(100));
