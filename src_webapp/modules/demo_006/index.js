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
//     document.body.onclick = () => {
//       alert(this.name);               
//     }
//   }
// }
// person.init();

// var person = {
//     name:'jike',
//     init:()=>{
        
//         document.body.onclick = ()=>{
//             alert(this.name);                  
//         }
//     }
// }
// person.init();  










// var a = ()=>{
//   return 1;
// }

// function b(){
//   return 2;
// }

// console.log(a.prototype);  // undefined
// console.log(b.prototype);   // {constructor: ƒ}



const add = x => y => y + x;