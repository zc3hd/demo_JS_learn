# JS 005

## ES6：箭头函数

* 箭头函数：如何用？就是简化函数，不要内部使用this,构建原型函数不要用。

* 后面的代码就一句话，默认就是return这句代码：
```
【无参数】
var f = () => 5;
==
var f = function() { return 5};
-------------------------------------------------
【有参数】
var sum = ( a, b) => a + b;
==
var sum = function( a, b) {
    return a +b;
}
```

* 后面多行代码，就需要用{}括起来
```
var sum = (a, b) => { 
    console.log(a,b);
    return a+b;
}
```

* 因为{}被解释为代码块，所以如果箭头函数直接返回一个对象时，必须在对象外面加一个大括号()。若不是返回一个对象，就无所谓了。
```
var get_obj = id => ({id: id, anme: "Temp"});
```

* 多参数传入，配合参数解构
```
var obj = {last: 2,};
const full = ({ first = 1, last } = obj) => first + "__" + last;
console.log(full())  //1__2 
```

* 用处1：简化回调函数
```
[1,2,3].map(function(x){
    return x*x;
});
[1,2,3].map(x => x*x);
--------------------------------------------
var arr = [];
[1, 2, 3].map(x => arr.push(x * x));
--------------------------------------------
$.get('./index.html')
  .then(data => {
    console.log(data);
  });
```

* 用处2：和参数解构一起使用
```
//...nums :使用rest参数与箭头函数结合的例子，变量解构传入的参数
const numbers = (...nums) => nums; 
numbers(1,2,3,4,5,6,7,8,9);  //[1,2,3,4,5,6,7,8,9]

//head, ...tail：head解构第一个参数，后面的形成数组
const headAndTail = ( head, ...tail) => [head, tail];
headAndTail(1,2,3,4,5,6,7,8,9);// [1, [2,3,4,5,6,7,8,9]]
--------------------------------------------
//初始化一个默认值
var fn = ({ a = 1, b = 2 }) => {  
  console.log(a, b);
};
var test_data = {
  a: "a",
  b: "b"
};
fn(test_data);
```

--------------------------------

* this对象就是定义时所在的【对象】，而不是使用时所在对象；永远指向定义时所在的对象。任何方法都改变不了，包括call，apply，bind；普通函数的this指向调用它的那个对象。
```
【所在对象】：person
let person = {
  name: 'jike',
  init: function() {
    document.body.onclick = () => {
      alert(this.name);               
    }
  }
}
person.init();  //jike
```

* 到这遇见个问题：gulp打印箭头函数的this为undefined。
* 用webpack-005，转后只是个{}；所以下面的案例只能自己体会了
```
var person = {
    name:'jike',
    init:()=>{
        
        【！】gulp打印箭头函数的this为undefined。
        【！】webpack-打印this为{}。

        document.body.onclick = ()=>{
            alert(this.name);                  
        }
    }
}
person.init();  //undefined
```

* 那么我在使用的时候，就是要注意不在在内部使用this。
* 箭头函数没有原型属性
```
var a = ()=>{
  return 1;
}

function b(){
  return 2;
}

console.log(a.prototype);  // undefined
console.log(b.prototype);   // {constructor: ƒ}
```

-------------------------

* 不要在类方法内部使用箭头函数。在class中尽量少用箭头函数声明方法。
```
【demo1】
class Super{
    sayName(){
        //do some thing here
    }
}
//通过Super.prototype可以访问到sayName方法，这种形式定义的方法，都是定义在prototype上
var a = new Super()
var b = new Super()
a.sayName === b.sayName //true
//所有实例化之后的对象共享prototypy上的sayName方法


【demo2】
class Super{
    sayName =()=>{

    }
}

//通过Super.prototype访问不到sayName方法，该方法没有定义在prototype上
var a = new Super()
var b = new Super()
a.sayName === b.sayName //false
//实例化之后的对象各自拥有自己的sayName方法，比demo1需要更多的内存空间
```

* 深层嵌套
```
const add = x => y => y + x;
==
function add(x){
  return function(y){
    return y + x;
  };
}
```

* 常见错误
```
let a = {
  foo: 1,
  bar: () => console.log(this.foo)
}

a.bar()  //undefined
```
