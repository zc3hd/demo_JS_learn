# JS 002

### 原型对象

* prototype:构造函数的原型对象。
* prototype属性：constructor默认值为当前构造函数的类名。
* __proto__:原型属性
* Foo.prototype的类型是Foo
* Object.prototype 是 Object 类型
* {} 与 Object.prototype 什么关系? {}.__proto__ 就是 Object.prototype

### 指向同一地址

* 实例化的对象的p.__proto__，和Person.prototype指向的是同一个地址。
```
Person.prototype === p.__proto__ 【true】;
```

* 同一地址的话，两种方法找到。
```
o.__proto__;
o.constructor.prototype;
```

* 修改地址上的方法，原型对象上的方法也被修改。新的实例化也被修改。
```
function Dog() {};
var dog_1 = new Dog();
dog_1.__proto__.hi = function () {
    console.log("hi");
};
var dog_2 = new Dog();
dog_2.hi();
```

* 引用传递:变量指向对象，存的都是地址或引用。函数参数，只是函数内部的变量。
```
var arr = [1,2,3];
function fn (_arr) {   【_arr是内部变量】
   _arr = [4,5,6];
}
fn(arr);  【_arr传入时，内部变量和arr有一样的引用】，里面修改只是修改内部变量的地址，不会修改外部变量上的地址。
console.log(arr);【[1,2,3]】
------------------------------------
var arr = [1,2,3];
function fn (_arr) {
   _arr[0] = 0;  【但这个，就是修改同一个地址上的属性】
}
fn(arr);
console.log(arr);
```

* 原型对象的引用：
```
function Person() {}

往原型对象上挂方法，就是开了个对象地址，就会一直存在。url_1
Person.prototype.aaa = function() {
  console.log("aaa fn");
};

这个实力上的原型对象上的地址就是刚才的：url_1。
var p1 = new Person();

新的对象被创建，就是新的地址：url_2。
Person.prototype = {
  bbb: function() {
    console.log("bbb fn");
  }
};

新的实例上的原型地址：url_2。
var p2 = new Person();

所以p1没有bbb()，p2没有aaa()。
p1.bbb();
p2.aaa();
```

### 继承

* 什么是继承，说的很扯淡，继承。就是你的原型对象从哪来的。
* Foo 的原型对象（Foo 的原型对象的原型属性）继承自 Object.prototype（来自Object.prototype）
```
Foo.prototyepe.__proto__ === Object.prototype;
```

* Object.prototype是所有原型对象的原型属性。它没有继承了，到头了。

### Object.prototype的方法

* hasOwnProperty():只要是直接在this上挂载属性，都是true。在prototype上挂属性都是false。
```
function App() {
  this.name = 'a';
};
App.prototype = {
  num:"",
  init:function(){
    this.age = 10;
  }
}

app.hasOwnProperty("age") true;
app.hasOwnProperty("num") false;
```

* isPrototypeOf():前面的对象是否为后面对象的原型。
```
function Foo() {}
var f = new Foo();

Foo.prototype.isPrototypeOf(f) == true
f.__proto__.isPrototypeOf(f) == true
```
