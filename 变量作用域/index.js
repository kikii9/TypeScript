var global_num = 12;
var Num = /** @class */ (function () {
    function Num() {
        this.num_val = 13;
    }
    Num.prototype.storeNum = function () {
        var local_num = 14;
    };
    Num.s_val = 10;
    return Num;
}());
console.log("全局变量为" + global_num);
console.log(Num.s_val);
var obj = new Num();
console.log("实例变量" + obj.num_val);
