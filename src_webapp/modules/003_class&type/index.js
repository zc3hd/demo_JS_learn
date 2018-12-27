// 'use strict';

function App() {
  this.name = 'a';
};
App.prototype.init = function() {
  var me = this;

  this.age = 10;

  // function Dog() {};
  // var dog_1 = new Dog();
  // dog_1.__proto__.hi = function () {
  //  console.log("hi");
  // };
  // var dog_2 = new Dog();
  // dog_2.hi();



  // var arr = [1,2,3];
  // function fn (_arr) {
  //    _arr[0] = 0;
  // }
  // fn(arr);
  // console.log(arr);



  // function Person() {}
  // Person.prototype.aaa = function() {
  //   console.log("aaa fn");
  // };

  // var p1 = new Person();

  // Person.prototype = {
  //   bbb: function() {
  //     console.log("bbb fn");
  //   }
  // };

  // var p2 = new Person();


  // p1.bbb();
  // p2.aaa();




  // var arr = [];
  // console.log(toString.call(arr));

  // console.log(Object);
};

// console.log(App.__proto__.constructor);
var app = new App();
app.init();



// console.log(toString.call(app));
// var o = new Object();
// console.log(app instanceof App);
// Function.prototype.aa = function(o) {
//   console.log("hahahahahahha");
// };

// // App.aa();
// console.log(App.__proto__ == Function.prototype);
// console.log(App.prototype.__proto__ == Object.prototype);
// function fn_1() {
//   console.log(arguments);
// }

// function  fn_2(argument) {
  
// }

// fn_2();
// fn_1(1,2,3);

// console.log(typeof(fn_1));
// console.log({a:1}.toString())
// console.log(App.prototype.__proto__);

console.log(typeof(new Date()))
