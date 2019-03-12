# JS 006

###  箭头函数初始化

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

* 用处2：无论是直接设置默认值还是参数解构其实都是设置默认值。参数变量是默认声明的。
```
【rest参数】：解构调用时传入的参数
//...nums :使用rest参数与箭头函数结合的例子，变量解构传入的参数
const numbers = (...nums) => nums; 
numbers(1,2,3,4,5,6,7,8,9);  //[1,2,3,4,5,6,7,8,9]

//head, ...tail：head解构第一个参数，后面的形成数组
const headAndTail = ( head, ...tail) => [head, tail];
headAndTail(1,2,3,4,5,6,7,8,9);// [1, [2,3,4,5,6,7,8,9]]
--------------------------------------------
【设置默认值】
var fn = ({ a = 1, b = 2 }) => {  
  console.log(a, b);
};
var test_data = {
  a: "a",
  b: "b"
};
fn(test_data);
--------------------------------------------
【设置默认值和参数解构】
var obj = {last: 2,};
const full = ({ first = 1, last } = obj) => first + "__" + last;
console.log(full())  //1__2 
--------------------------------------------
【参数默认值的声明】不能再次声明
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
--------------------------------------------
【惰性传入】每次调用有默认值的函数，都是拿到参数默认值表达式重新计算。
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}
foo() // 100
x = 100;
foo() // 101
```

### this指向

* this对象就是定义时所在(函数)的this，就是外层函数的this，不是使用时所在(函数)；
* 永远指向定义时所在的对象。任何方法都改变不了，包括call，apply，bind；因为自己没有this,就没有这些方法。普通函数的this指向调用它的那个对象。
```
【所在对象】：person
let person = {
  name: 'jike',
  init: function() {
    console.log(this);  // 调用时的对象(函数)
    document.body.onclick = () => {
      alert(this.name);               
    }
  }
}
person.init();  //this-->person对象
person.init.call(this);  //this-->windows
```

* 到这遇见个问题：gulp打印箭头函数的this转为viod 0,viod 0打印undefined。用webpack-005，转后只是个{}；现在只能关闭转换。
* 那么我在使用的时候，就是要注意不在在内部使用this。
```
var person = {
    name:'jike',
    init:()=>{
        console.log(this); // 创建时所在函数的this，就是window
        document.body.onclick = ()=>{
            alert(this.name);                  
        }
    }
}
person.init();  //this-->window
person.init.call({});  //this-->window
-----------------------------------------------------
function foo() {
  console.log(this);  //外面函数的this,直接调用就是widow
  setTimeout(() => {
    console.log('id:', this.id); //创建时的this,就是外面函数的this
  }, 100);
}

var id = 21;
foo.call({ id: 42 });  // 被指向其他对象，所以打印是{ id: 42 }；打印为42
-----------------------------------------------------
function foo() {
  setTimeout(function() {
    console.log('id:', this.id);  // 就是调用setTimeout函数的this,就是window
  }, 100);
}

var id = 21;
foo.call({ id: 42 });  //虽然foo的this发生改变，但是setTimeout的this还是window；var id = 21;全局变量，打印为21
-----------------------------------------------------
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);  //this就是Timer对象
  // 普通函数
  setInterval(function () {  //this就是window
    this.s2++;
  }, 1000);
}
var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);  //3
setTimeout(() => console.log('s2: ', timer.s2), 3100);  //0

3s后 
setInterval(() => this.s1++, 1000); 已经执行三次，this为timer对象
setInterval(function () {  this.s2++;}, 1000); 尽管执行三次，但是window上没有这个值。也就是说，setInterval执行的都是
最后打印的是timer对象上的s2值。
```
* 因为所有箭头函数，都没有自己的this；
* 它们的this其实都是最外层foo函数的this。除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
* 由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
* 箭头函数没有原型属性，所以就不能做构造函数。
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

* （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
* （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
* （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
* （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

* 在class中尽量少用箭头函数声明方法。
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

###  其他

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
