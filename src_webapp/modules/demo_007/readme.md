# JS 007

## ES6：类

* 类函数，参数有默认值传入
```
class Person {
  constructor(name = 'aa', age = 0) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
    return this.name;
  }
  showAge() {
    return this.age;
  }
}
var p1=new Person('aaa',10);
var p2=new Person('bbb',20);

console.log(p2.showName==p1.showName);
console.log(p1.constructor==Person);
```

* 类的继承
```
class Worker extends Person {
  constructor(name, age, job = '扫地的') {
    super(name, age);
    this.job = job;
  }
  showJob() {
    return this.job;
  }
}
var w1 = new Worker('mmm', 56);
w1.showName()
```

## 模块化

* gulp只是把语法转为module.exports和require();在webpack用。
```
export default {};
import modA from './a.js';
```

## Promise

```
new Promise(function(resolve,reject){
    resolve(data)
    reject(data);
});
-----------------------------------------------------
var p1=new Promise(function(resolve,reject){
    resolve(1)
});
p1
  .then(function(value){
      console.log(value);
      return value+1;
  })
  .then(function(value){
      console.log(value);
  });
-----------------------------------------------------
p1
  .then(function(value) {
    console.log(value);
    A
  })
  .catch(function(e) {  //捕捉错误
    console.log(e);
  });

Promise
  .resolve(3)
  .then(function(value) {
    console.log(value);
    // A
  });
-----------------------------------------------------
【all】
var p1=Promise.resolve(3);
var p2=Promise.reject(3);

Promise.all([p1, p2])
  .then(
  function(data) {  // 全部成功走这个
    console.log(data);
  }, 
  function(data) {  // 有一个失败走这个
    console.log(data);
  });
-----------------------------------------------------
【race】
var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 50, 'one');  //可以这样用
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});
Promise.race([p1, p2])
  .then(function(value) {
    console.log(value);
  });
```
