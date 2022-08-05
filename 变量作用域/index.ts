var global_num = 12

class Num{
    num_val = 13
    static s_val = 10

    storeNum():void{
        var local_num = 14
    }
}

console.log("全局变量为"+global_num);
console.log(Num.s_val);
var obj = new Num()
console.log("实例变量"+obj.num_val);


