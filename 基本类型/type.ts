// 字面量
let a:10
a = 10

// 可使用|连接多个类型
let b:boolean|number
b = true
b = 10

// any任意类型
let c:any
c = 10
c = 'hello'
c = true

// unknown 表示未知类型的值
let d:unknown
d = 10
d = 'hello'
d = true

// 区别
// any可以另外赋值给任意变量
// unknown不能直接赋值给其他变量（类型安全的any）

// 类型断言
let s: string
s = d as string
s = <string> d

// void 无返回值
function fn():void{
    
}

// never 表示永远不会返回结果
function fn2():never{
    throw new Error('程序出错了')
}

let obj:object


