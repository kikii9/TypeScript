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


/**
 * 区别
 * any可以另外赋值给任意变量
 * unknown不能直接赋值给其他变量（类型安全的any）
 * 
 */ 


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

// object-不推荐
let obj:object
obj = {}
obj = function(){}
obj = ()=>{}

/**
 * {}用来指定对象中可以包含哪些属性
 * 在属性名后加上?表明属性是可选的
 * [propName:string]:any
 */
let e:{
    name:string,
    age?:number
}
e = {name:'tom'}

let f:{
    name:string,
    [propName:string]:any
}
f = {name:'jerry',age:18,sex:'male'}

/**
 * 函数
 */
let g:(a:number,b:number)=>number
g = (n1:number,n2:number)=>{
    return n1+n2
}

/**
 * 数组
 */
let h:string[]
h = ['a','b','c']

let i:number[]
i = [1,2,3,4]

let j:Array<number>
j = [1,2,3,4]

/**
 * 元组：固定长度的数组
 */

let k:[string,string]
k = ['hi','hello']

let l:[string,number]
l = ['hi',123]

/**
 * 枚举
 */
enum Gender{
    Male = 0,
    Female = 1
}
let m:{
    name:string,
    gender:Gender
}
m = {
    name:'tom',
    gender:1
}
