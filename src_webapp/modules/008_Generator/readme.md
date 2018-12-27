# JS 008

## ES6：Generator

* gulp测试关闭转es6
* Generator函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
```
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next() // { value: 'hello', done: false }   yield 'hello';<--执行到这
hw.next() // { value: 'world', done: false }   yield 'world';<--执行到这
hw.next() // { value: 'ending', done: true }   return 'ending';<--执行到这
hw.next() // { value: undefined, done: true }  };<--执行到这
```

* yield表达式返回值为undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
* 意义：通过next方法的参数，就有办法在 Generator函数开始运行之后，继续向函数体内部注入值。也就是说，可以在Generator函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。

```
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();
g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false } 执行到这里的时候，函数暂停
g.next(true) // 传入true,作为上一个yield表达式的返回值,执行if(reset) { i = -1; }  所以{ value: 0, done: false }
```
