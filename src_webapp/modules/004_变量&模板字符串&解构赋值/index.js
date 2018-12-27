'use strict';

// {
//   let a = 10;
//   var b = 1;
// }
// console.log(b);

// for (let i = 0; i < 10; i++) {
//   setTimeout(function  (argument) {
//     console.log(i);
//   },2000)
// }

// {
//   console.log(a);
//   let a = 10;
// }


// const a = 1;
// var [{a,e},[b,c],d]=[{e:'eeee', a:'aaaa'},[1,2],5];
// console.log(b);





// var {time=12,id=0}={};
// console.log({time,id});






// let node = {
//     type: "Identifier",
//     name: "foo"
// };
// const { type, name } = node;
// type  = 1;





// let node = {
//     type: "Identifier",
//     name: "foo"
// };
// function outputInfo(value) {
//     console.log(value === node); // true
// }
// var { type, name } = {};
// outputInfo({ type, name } = node);



// let node = {
//   type: "Identifier",
//   name: "foo",
//   loc: {
//     start: {
//       line: 1,
//       column: 1
//     },
//     end: {
//       line: 1,
//       column: 4
//     }
//   }
// };
// let { loc: { start } } = node;
// // console.log(loc); 
// console.log(start.line); // 1
// console.log(start.column); // 1



// let obj = {
//   a: {
//     aa: 'aa',
//     bb: 'bb'
//   }
// };

// let { a:{
//   aa
// } } = obj;
// console.log(aa);


// var [...obj] = [{
//   a: 1
// }];
// console.log(obj[0]);
