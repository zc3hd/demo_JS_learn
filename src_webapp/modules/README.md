

#### 3.8 面对对象

```
//单体模式--直接对象，ES6是找不到this的当前对象的。this指全局的window
var person={
    name:'abc',
    age:16,
    showName:function(){
        alert(this.name);
    },
    showAge:function(){
        alert(this.age);
    }
};
person.showName();----'abc'

// var person={
//     name:'abc',
//     age:16,
//     showName:()=>{
//         alert(this.name);
//     },
//     showAge:()=>{
//         alert(this.age);
//     }
// };
// person.showName();----空的
-------------------------------------------------------------------
构造函数：之前的又是类，又是构造函数
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.showName=function(){
    return this.name;
};
Person.prototype.showAge=function(){
    return this.age;
};

【注意类中的构造函数内部的方法之间没有逗号隔开】
class Person{ //类
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showName(){
        return this.name;
    }
    showAge(){
        return this.age;
    }
}

var p1=new Person('aaa',10);

-------------------------------------------------------------------------
class Person{ //类--给默认值【这是函数的功能】
    constructor(name='default',age=0){
        this.name=name;
        this.age=age;
    }
    showName(){
        return this.name;
    }
    showAge(){
        return this.age;
    }
}


var p1=new Person('aaa',10);
var p2=new Person('bbb',20);

【注意：这里为函数名--实例化用的方法都是同一个方法】
p2.showName==p1.showName--------------true
【构造器就是这个类？】
p1.constructor==Person----------------true

-------------------------------------------------------------------------
【ES5--对象的继承】
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.showName=function(){
    return this.name;
};
Person.prototype.showAge=function(){
    return this.age;
};

//Worker
function Worker(name,age){
    【这里的就是执行Person这个函数，且改变Person函数内部this的指向。】
    Person.apply(this,arguments);
}
【这里实例化对象竟然挂载为原型，那么Worker需要的方法就是在实例化上的__proto__上找到真正Person上的方法】
Worker.prototype=new Person();

var p1=new Person('abc',10);
var w1=new Person('ddd',20);

-------------------------------------------------------------------------
【ES5--原型对象】
function Person() {
}
Person.prototype.aaa = function() {
console.log("aaaaaaa+++++++++++");
};
var p1 = new Person();

Person.prototype = {
    sayHello: function() {
      console.log("hello, 你好 JavaScript!");
    }
};
var p2 = new Person();
p1.sayHello();-----【这个会报错，因为第一个对象里面保存的还是原来原型的地址。】
p2.sayHello();

-------------------------------------------------------------------------
Foo 的原型对象（Foo 的原型对象的原型属性）继承自 Object.prototype（来自Object.prototype）
Foo.prototype.__proto__ 是 Object.prototype

-------------------------------------------------------------------------
【ES6--继承】
class Person{ //类
    constructor(name='default',age=0){
        this.name=name;
        this.age=age;
    }
    showName(){
        return this.name;
    }
    showAge(){
        return this.age;
    }
}


class Worker extends Person{
    constructor(name,age,job='扫地的'){
        super(name,age);
        this.job=job;
    }
    showJob(){
        return this.job;
    }
}

var p1=new Person();
var w1=new Worker('mmm',56);
```

#### 3.8.1 函数的扩展

* 默认传值

```
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
---------------------------------------------------------
参数变量是默认声明的，所以不能用let或const再次声明。
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
---------------------------------------------------------
一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。

let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101

上面代码中，参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。调用的时候都是有默认值的，每次都会重新计算

----------------------------------------------------------
【与解构赋值默认值结合使用】
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2
foo() // TypeError: Cannot read property 'x' of undefined

上面代码使用了对象的解构赋值默认值，而没有使用函数参数的默认值。只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值而生成。
所以解构赋值传给函数作为参数时，必须是对象么？

解构赋值默认值---是调用的时候必须要传入这个这个对象的！至于对象里有没有值是没有关系的。但是必须要传入。
-----------------------------------------------------------------
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

上面两种写法都对函数的参数设定了默认值，
区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
【函数参数有默认值--意思就是不传入的参数的时候，取这个默认值，可以不传，但是也设置了解构赋值】

写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
// 函数没有参数的情况
m1() // [0, 0]
【没有传，默认{}，解构赋值{x = 0, y = 0}】
m2() // [0, 0]
【没有传，默认{ x: 0, y: 0 }】

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
【有解构赋值，y=0】
m2({x: 3}) // [3, undefined]
【传入的对象中没有y,所以为undefined】

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]
```


#### 3.9 模块化

```
导出模块：
const a=5;
export default a;

导入模块：
import modA from './a.js';
import modB from './b.js';

console.log(modA+modB);
```

#### 3.10 Promise

```
new Promise(function(resolve,reject){
    【里面写异步的函数】
    resolve(data)--用于传递成功后的数据
    reject(data);--用于传递失败后的数据
});
------------------------------------------------------
var p1=new Promise(function(resolve,reject){
    resolve(1)
});

p1
.then(function(value){
    console.log(value);
    return value+1;
},function(value){
    alert('失败了:'+value);
})
【后面还可以接着then函数】
.then(function(value){
    console.log(value);
});

------------------------------------------------------
【.catch()--用于捕获错误】
p1.then(function(value){
    console.log(value);
    throw '发生错误了';
}).catch(function(e){
    console.log(e);
});

------------------------------------------------------
【Promise.all([true,p1])--用于拿到所有的异步的结构形成一个数组】
var p1=Promise.resolve(3);--【Promise.resolve(3)可以用于直接传递数据】

Promise.all([true,p1])--【注意这里放置的是数组】
.then(function(value){
    console.log('成功了,'+value);  //成功了,true,3
},function(value){
    console.log('错误了,'+ value);
});

-------------------------------------------------------
var p1=Promise.resolve(3);
var p2=Promise.reject(5);

Promise.all([true,p1,p2])-----【这里只要有一个promise对象是reject，就会走后面那个函数】
.then(function(value){
    console.log('成功了,'+value);
},function(value){
    console.log('错误了,'+ value);---这个。
});

--------------------------------------------------------
【Promise.resolve(xxx)--传递一个成功的数据，后面有then方法】
Promise.resolve('Success')
.then(function(value){
    console.log(value);
},function(res){
    console.log(res);
});

--------------------------------------------------------
【Promise.race([p1,p2])--拿到最先请求到结果】
var p1=new Promise(function(resolve,reject){
    setTimeout(resolve,50,'one');
});
var p2=new Promise(function(resolve,reject){
    setTimeout(resolve,100,'two');
});

Promise.race([p1,p2]).then(function(value){
    console.log(value);
});

```

#### 3.11 Generator基础

* 一个状态机，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
* 星号* 的写法随意 

```
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```

* 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
* yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值。
* yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。

```
【next】yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }--【执行到这里的时候，函数暂停，下一个g.next(true)传入true，会作为上一个yield表达式的返回值，接着开启函数】

g.next(true) // { value: 0, done: false }

【这个功能有很重要的语法意义--Generator 函数的数据交换】Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。

```

#### 3.12 Generator协程

* 协程有点像函数，又有点像线程。它的运行流程大致如下。
* 第一步，协程A开始执行。
* 第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
* 第三步，（一段时间后）协程B交还执行权。
* 第四步，协程A恢复执行。

```
function *asyncJob() {
  // ...其他代码
  var f = yield readFile(fileA);
  // ...其他代码
}
```

* 上面代码的函数asyncJob是一个协程，它的奥妙就在其中的yield命令。它表示执行到此处，执行权将交给其他协程。也就是说，yield命令是异步两个阶段的分界线。
* 协程遇到yield命令就暂停，等到执行权返回，再从暂停的地方继续往后执行。它的最大优点，就是代码的写法非常像同步操作，如果去除yield命令，简直一模一样。

```
【异步任务的封装】
var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}
```

* 上面代码中，Generator 函数封装了一个异步操作，该操作先读取一个远程接口，然后从 JSON 格式的数据解析信息。就像前面说过的，这段代码非常像同步操作，除了加上了yield命令。执行这段代码的方法如下。

```
var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});
```

* 上面代码中，首先执行 Generator 函数，获取遍历器对象，然后使用next方法（第二行），执行异步任务的第一阶段。由于Fetch模块返回的是一个 Promise 对象，因此要用then方法调用下一个next方法。
* 【拓展】这里让我想起在用koa框架的时候，每一个路由需要一个生成器函数，内部就是yiled 后面跟着一个异步的函数。但不是上面那样的执行，我觉得可能是在koa调用生成器函数内部就调用了这个遍历器对象吧。

