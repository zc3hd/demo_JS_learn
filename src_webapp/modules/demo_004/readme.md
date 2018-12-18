# JS 004

### ES6：变量、模板字符串、解构赋值

* ECMA是标准，js是实现。
* gulp编译：
```
var babel = require('gulp-babel');
.babel({
  presets: ['es2015']
})
```

* let:块级变量，形成作用域，闭包。不允许在域内重新赋值。使用在for循环内的异步，闭包实现。
* const：定义常量,初始化必须赋值，以后不允许改变。也是不允许重复声明。
```
{
  let a = 10;
  var b = 1;
}
a --->ReferenceError: a is not defined.
b --->1
-----------------------------------------
for (let i = 0; i < 10; i++) {
  setTimeout(function  (argument) {
    console.log(i);
  },2000)
}
let 块级变量，形成闭包。
-----------------------------------------
{
  console.log(a);  ---->undefined
  let a = 10;
}
```

* 模板字符串
```
`
<div>${a}</div>
<div>${b}</div>
`
```

* 对象解构：解构的变量需要和后面数据的key进行对应
```
【格式和声明】：
声明解构赋值前面的 let,const,var是对内部最下面一层的变量进行声明。
像下面const就是对type, name的声明，不允许再改。
let node = {
    type: "Identifier",
    name: "foo"
};
const { type, name } = node;
type  = 1;

------------------------------------------
【快速变量赋值】快速对一组数据进行变量赋值。
let node = {
    type: "Identifier",
    name: "foo"
};
let { type, name } = node;
console.log(type); // "Identifier"
console.log(name); // "foo"

var [{a,e},[b,c],d]=[{e:'eeee', a:'aaaa'},[1,2],5];
console.log(a);   'aaaa'
console.log(b);   1
------------------------------------------
【小括号包裹】：单独进行赋值时，要用小括号进行包裹，不然JS默认{}是块级作用域，不允许出现在左侧。
let node = {
    type: "Identifier",
    name: "foo"
},
type = "Literal",
name = 5;
({ type, name } = node);

console.log(type); // "Identifier"
console.log(name); // "foo"

------------------------------------------
【参数传入】解构赋值既是对变量赋值，又是返回一个对象，可以作为参数传入。
let node = {
    type: "Identifier",
    name: "foo"
};
function outputInfo(value) {
    console.log(value === node); // true
}
var { type, name } = {};
outputInfo({ type, name } = node);

------------------------------------------
【设置默认值】：当没有有个变量和解构的变量不一样时，默认分配undefined，但是可设置默认值。
var {time=12,id=0}={};
console.log(time); // 12

------------------------------------------
【多层嵌套】：数据可以是多层嵌套，解构就是看解构到哪层
let obj = {
  a: {
    aa: 'aa',
    bb: 'bb'
  }
};
let { a } = obj;
console.log(a);  // {aa: 'aa',bb: 'bb'}



let obj = {
  a: {
    aa: 'aa',
    bb: 'bb'
  }
};
let { a:{aa} } = obj;
console.log(aa);  // "aa"
```

* 数组解构：解构变量不需要对应声明
```
let colors = [ "red", "green", "blue" ];
let [ firstColor, secondColor ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"

------------------------------------------------
let colors = [ "red", "green", "blue" ];
let [ , , thirdColor ] = colors;
console.log(thirdColor); // "blue"

------------------------------------------------
【交换值】在 ES6 中互换值
let a = 1,
    b = 2;
[ a, b ] = [ b, a ];
console.log(a); // 2
console.log(b); // 1

-------------------------------------------------
【默认值】
let colors = [ "red" ];
let [ firstColor, secondColor = "green" ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"

-------------------------------------------------
【嵌套数组】
let colors = [ "red", [ "green", "lightgreen" ], "blue" ];
let [ firstColor, [ secondColor ] ] = colors;

console.log(firstColor); // "red"
console.log(secondColor); // "green"

-------------------------------------------------
【复制数组】
// 在 ES5 中克隆数组
var colors = [ "red", "green", "blue" ];
var clonedColors = colors.concat();
console.log(clonedColors); //"[red,green,blue]"

// 在 ES6 中克隆数组
let colors = [ "red", "green", "blue" ];
let [ ...clonedColors ] = colors;
console.log(clonedColors); //"[red,green,blue]"
```

* 混合解构
```
let node = {
    loc: {
        start: {
            line: 1,
            column: 1
        },
    },
    range: [0, 3]
};
let {
    loc: { start },
    range: [ startIndex ]
} = node;

console.log(start.line); // 1
console.log(start.column); // 1
console.log(startIndex); // 0
```

* 解构参数：其实就是要知道你传入的是什么，要不要进行解构，要不要给变量默认值。
```
const setCookieDefaults = {
    secure : false,
    path : "/",
    domain : "example.com",
    expires : new Date(Date.now() + 360000000)    
}
function setCookie(name, value,{
        secure = setCookieDefaults.secure,
        path = setCookieDefaults.path,
        domain = setCookieDefaults.domain,
        expires = setCookieDefaults.expires        
    }=setCookieDefaults) {
}
```



