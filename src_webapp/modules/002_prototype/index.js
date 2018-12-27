'use strict';

function App() {
  this.name = 'a';
};
App.prototype = {
  constructor: App,
  num: "",
  init: function() {
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
  },
};

// console.log(App.__proto__.constructor);
var app = new App();
app.init();

// console.log(App.prototype === app.__proto__);

// console.log(App.prototype.__proto__ === Object.prototype);

// var arr = [];
// console.log(toString.call(app));


// console.log(app.hasOwnProperty("num"));


// function Foo() {}
// var f = new Foo();

// var isTrue = Foo.prototype.isPrototypeOf(o);
// isTrue = Foo.prototype.isPrototypeOf(f);

// console.log("Foo.prototype.isPrototypeOf(f) = " + isTrue);
// isTrue = f.__proto__.isPrototypeOf(f);
// console.log("f.__proto__.isPrototypeOf(f) = " + isTrue);


console.log(toString.call(App));