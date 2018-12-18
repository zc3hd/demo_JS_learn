# JS 001

* 命名
```
var _1 = 1;
```

* 转数字
```
console.log(Number(true)); 1
console.log(Number("",false, ,null)); 0
Number(NaN、undefined、'asd'、fn、{}) NaN
```

* 字符串
```
str.charAt(7)  查下标为7的字符
str.indexOf('a') 从前找
str.lastIndexOf('a') 后找

str_1.concat(str_2)  拼接

str.slice(2,3)    包左不包右，下标2开始，3结束
str.slice(2)      从2开始向后截取，slice(0)全部截取
str.slice(-3)     从后截取3个
str.slice(0, -1); 把最后一个字符截取不要

box1.substr(3,2)  下标3为开始，截取两个字符

str.toUpperCase();
str.toLowerCase();
```

* arr
```
arr.push()  从后加
arr.pop()   从后删
arr.unshift()  从前加
arr.shift()  从前删
arr.splice(i, 1);  删除某个

newArr = arr1.contact(arr2)  合并为新数组

arr.join('_');
string.split('_');
```

* DOM
```
DOM.offsetHeight    构成为width+padding+border
DOM.offsetLeft   
会从自身开始，向上找到position，找到定位边界，到定位边界的距离
DOM.scrollHeight   和offsetHeight相比，少border
```

* window
```
window.scrollTo(0, leader);  控制页面滑动到0，leader  这个坐标.
window.onload = function(){}  HTML文档结构加载完成加载JS
```

* fn 变量范围
```
function fn() {
  var a = f = 1;
}
fn(); 【f is not defined】
------------------------------------
var a = 1;
function fn() {
  console.log(a);【undefined】
  var a = 0;
}
fn();  
------------------------------------
var a = 1;
function fn() {
  console.log(a);【1】
  a = 0;
}
fn();
```

* 正则:包容模式 前面为规则，
```
只要包含就是true
/chuan/.test("chuang") 【true】
/chuan/.test("chuan")  【false】
-------------------------------------------------
[123] 不管是数字还是str,后面测试的有一个在其中是true，
/[12345]/.test(13)   【true】
/["12345"]/.test(1)   【true】

反向选择,不在其中
/[^12345]/.test(13)  【false】
-------------------------------------------------
只要后面测试的有一个在其中，就是true
/[0-9]/.test("cz")     【false】
/[a-zA-Z]/.test("0c")  【true】
-------------------------------------------------
正则规则为分组，后面符合测试对象只要有前面的组，不管num还是str，都是正确
var reg = /(13[0-9]|145|147|15[0-9]|18[0-9]|170)/;
console.log(reg.test("131a"));【true】

```

* 正则:严格模式,就是必须以什么开头，以什么结尾。规则字符串不用加双引号
```
/^chuan$/.test("achuan") 【false】
/^1*$/.test("") *是0起多个 【true】
/^a+$/.test("a") + 1起 【true】
/^a?$/.test("aa")  ? 0或1 【false】
/^a{4}$/.test("aaaa")  {m} 必须出现m次 【true】
/^a{2,5}$/.test("aaaaaa") {m,n} 出现m到n次 【false】
/^a{2,}$/.test("aa")  {m,} 出现m次以上，包括m次【true】
```

* 闭包
```
a. 定义：外部可以调用函数内部的函数，闭包包的是变量
b. 原因：为什么要包起来？实现变量名的私有化，在外界需要的时候又可以访问改变。
c. 缺点：闭包的数据常驻内存，不清除的话，会使内存溢出

function test_fn() {
  var _num = 0;
  return function() {
    _num++;
    console.log(_num);
  }
}
var fn = test_fn();
fn();1
fn();2
fn();3

fn这个变量相当于接受了一个带有初始化变量的函数，
每次执行的时候就把内部的变量进行进行一次计算。
下次执行的时候，内部的变量再次被执行。
一直会持有内部的变量和状态。
这就是闭包。
-------------------------------------------------
DOM事件绑定
for (var i = 0; i < spans.length; i++) {
  spans[i].onmouseover = function(num) {
    return function() {
      console.log(num);
    };
  }(i);
}
可以看到onmouseover后面这个函数自执行，返回个带有初始化状态变量的函数，
也是就是每个函数内部的i，被保存下来。
-------------------------------------------------
for()循环里的异步函数
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(argument) {
      console.log(i);
    }, 1000);
}
for循环里嵌套异步，我们在回调函数内需要拿到的数据进行运算，就需要做一个闭包，才能进行参数初始化的保存。所以要写成：
for (var i = 0; i < arr.length; i++) {
  (function fn(num) {
    setTimeout(function(argument) {
      console.log(num);
    }, 1000);
  })(i);
}
写个闭包函数，把数据的状态初始化保证在函数内部。或者用arr.forEach;
因为forEach后面的函数就形成一个闭包，就不需要再写闭包了。
arr.forEach(function(ele, index) {
    setTimeout(function(argument) {
      console.log(ele,index);
    }, 1000);
});
```

