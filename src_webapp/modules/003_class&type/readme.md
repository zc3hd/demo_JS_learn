# JS 003

### 函数的类型、查看类型

### 函数

* 函数也是对象，函数是 Function 的实例, 意味着函数作为对象其构造方法是 Function。
* 函数作为对象它也有 __proto__ 属性, 这个属性是指Function.prototype。
* 如何希望每个实例函数都有某个方法：
```
Function.prototype.aa = function(o) {
  console.log("hahahahahahha");
};

App.aa();
```

* 继承
```
App.__proto__ == Function.prototype  true
App.prototype.__proto__ == Object.prototype  true
Function.prototype.__proto__ == Object.prototype  true
```
* 万物皆对象

### 查看类型

* 查看对象属于什么类型
```
Function类型
toString.call(App)  [object Function]

toString.call(app)  [object Object]
```

* instanceof :看对象属于哪一类，或者是否有继承关系
```
前面对象是否是后面的对象的实例
app instanceof App  == true
Object instanceof Function  == true

前面的原型继承后面的
Function instanceof Object   == true
（Function.prototype.__proto__ == Object.prototype）
```

* typeof() :简单的获取下类型
```
typeof(fn_1)  function
typeof("")    string
typeof(0)     number

typeof([])
typeof({})
typeof(new Date())    object
```

* prototype/__proto__:原型对象/原型属性上寻找对象的类型。