# JS 005

## ES6：Map

### Map

* 对象就是简单的键值对映射。其中的键和值可以使任意值，对象的键只能是字符串。
* Map vs Object
```
1.一个对象通常都有自己的原型，所以一个对象总有一个"prototype"键。不过，从ES5开始可以使用map = Object.create(null)来创建一个没有原型的对象。
2.一个对象的键只能是字符串或者Symbols，但一个Map的键可以是任意值。
3.可以通过size属性很容易地得到一个Map的键值对个数，而对象的键值对个数只能手动确认。

Map.length 属性length的值为0。
Map.prototype 表示Map构造器的原型。允许添加属性从而应用与所有的Map对象。
Map.prototype.constructor 返回创建给map实例的构造函数，默认是Map函数。
Map.prototype.size 返回Map对象的键值对的数量。
```

* 创建
```
    //1.
    var map = new Map();
    map.set('one', 1);
    map.set('two', 2);
    map.set('three', 3);
    //...    

    //2.
    var map = new Map([['one',1], ['two', 2], ['three', 3]]);
```

* for of 
```
for(var name of map){
    console.log(name);
}

one,1
two,2
three,3
```

* Map.prototype.clear()
```
console.log(map.size);  3  
map.clear();
console.log(map.size);  0
```

* Map.prototype.delete(key):删除键值对
```
console.log(map.has("one")); //true
map.delete("one");
console.log(map.has("one")); //false
```

* Map.prototype.set(key, value) 设置Map对象中键的值，返回该Map对象。
```
map.set(4, 'four');
```

* Map.prototype.entries() 返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的[key, value]数组。
```
for(var [a,b] of map.entries()){
    console.log(a,b);
}
```

* Map.prototype.forEach(callbackFn[, thisArg]) 按插入顺序，为Map对象里的每一键值对调用一次callbackFn函数。如果为forEach提供了thisArg，他将在每次回调函数中作为this值。
```
map.forEach(function(value, key, mapObj) {
    console.log(value + '---' + key + '---' + mapObj);
    //value - Map对象里每一个键值对的值
    //key - Map对象里每一个键值对的键
    //mapObj - Map对象本身
    console.log(this); //this === window
});

map.forEach(function(value, key, mapObj) {
    console.log(value + '---' + key + '---' + mapObj);
    console.log(this);    //this === map
}, map)
```

* Map.prototype.get(key):返回键对应的值
```
map.get(1); //'one'
```

* Map.prototype.keys() 返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的键。
```
for(var name of map.keys()){
    console.log(name);
}
```

* Map.prototype.values() 返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值。
```
for(var val of map.values()){
    console.log(val);
}
```

### 使用
* 相对于对象就是方便很多，提供的函数可以快速获得你要的东西，键值对的键可以为任何参数，使用：我们本地的属性键和真实数据的键进行对应。就可以使用map。
```
var map = new Map([
  ['test_1', "data_1"],
  ['test_2', "data_2"],
  ['test_3', "data_3"]
]);
```

