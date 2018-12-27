'use strict';

// class Person { //类
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//   	console.log(this.name);
//   }
//   showAge() {
//     return this.age;
//   }
// }

// var p1 = new Person('aaa', 10);
// p1.showName();



// class Person {
//   constructor(name = 'aa', age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log(this.name);
//     return this.name;
//   }
//   showAge() {
//     return this.age;
//   }
// }


// var p1=new Person('aaa',10);
// var p2=new Person('bbb',20);

// console.log(p2.showName==p1.showName);
// console.log(p1.constructor==Person);


// class Worker extends Person {
//   constructor(name, age, job = '扫地的') {
//     super(name, age);
//     this.job = job;
//   }
//   showJob() {
//     return this.job;
//   }
// }
// var w1 = new Worker('mmm', 56);
// w1.showName()


// import m_1 from './m_1.js';
// console.log(m_1);



// var p1 = new Promise(function(resolve, reject) {
//   resolve(1)
// });

// p1
//   .then(function(value) {
//     console.log(value);
//     return value + 1;
//   })
//   .then(function(value) {
//     console.log(value);
//     return value + 1;
//   })
//   .then(function(value) {
//     console.log(value);
//     return value + 1;
//   })


// var p1=Promise.resolve(3);
// p1
//   .then(function(value) {
//     console.log(value);
//     // A
//   })
//   .catch(function(e) {
//     console.log(e);
//   });


// var p2=Promise.reject(3);

// Promise.all([p1, p2])
//   .then(function(data) {
//     console.log(data); //成功了,true,3
//   }, function(data) {
//     console.log(data);
//   });


