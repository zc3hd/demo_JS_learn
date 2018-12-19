'use strict';
// var get_obj = id => ({id: id, anme: "Temp"});
// console.log(get_obj("a"));

// var obj = {
//   last: 2,
// };
// const full = ({ first = 1, last } = obj) => first + "__" + last;
// console.log(full())


// var arr = [];
// [1, 2, 3].map(x => arr.push(x * x));
// console.log(arr);

// [3, 2, 1].map(x => arr.push(x * x));

// $.get('./index.html')
//   .then(data => {
//     console.log(data);
//   });


// var test_data = {
//   a: "a",
//   b: "b"
// };

// var fn = ({ a = 1, b = 2 } = test_data) => {
//   console.log(a, b);
// };

// fn({});


// let person = {
//   name: 'jike',
//   init: function() {
// 		console.log(this);
//     document.body.onclick = () => {
//       alert(this.name);               
//     }
//   }
// }
// person.init();


// var person = {
//   name: 'jike',
//   init: () => {
//     console.log(this);
//     document.body.onclick = () => {
//       alert(this.name);
//     }
//   }
// }
// person.init();
// person.init.call({});


// function foo() {
//   setTimeout(function() {
//     console.log('id:', this.id);
//   }, 100);
// }

// var id = 21;
// foo.call({ id: 42 });

// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   // 箭头函数
//   setInterval(() => this.s1++, 1000);
//   // 普通函数
//   setInterval(function () {
//     this.s2++;
//   }, 1000);
// }

// var timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);







// var cc= 2;

// var a = ()=>{
//   return 1;
// }

// function b(){
//   return 2;
// }
// console.log(a.prototype);  // undefined
// console.log(b.prototype);   // {constructor: ƒ}



// const add = x => y => y + x;
