// 集合是啥
    // 集合通常是由一组无序的，不能重复的元素构成

// 集合实现原理
    //this.items[value] = value

// 集合有什么应用场景


//方法
//add(value)：向集合添加一个新的项。
// has(value)：如果值在集合中，返回true，否则返回false。
// remove(value)：从集合移除一个值。
// clear()：移除集合中的所有项。
// size()：返回集合所包含元素的数量。与数组的length属性类似。
// values()：返回一个包含集合中所有值的数组。
// 还有一些集合其他相关的操作, 暂时用不太多, 这里暂不封装.

//集合间操作
//并集
//交集
//差集
//子集

//封装集合的构造函数
function SetDiy() {
    //使用一个对象来保存集合的元素
    this.items = {}; //这个相当于数组

    //集合的操作方法

    //添加
    SetDiy.prototype.add = function (value) {
        //判断当前集合中是否已经包含了该元素
        if(this.has(value)) return false;

        this.items[value] = value; // 键和值都是value
        return true;
    }

    // 判断集合中是否有某个元素
    SetDiy.prototype.has = function (value) {
        return this.items.hasOwnProperty(value);
    }

    // remove(value)：从集合移除一个值
    SetDiy.prototype.remove = function (value) {
        if(!this.has(value))return false; // 若没有返回
        delete this.items[value];
        return true;
    }

    //clear()：移除集合中的所有项。
    SetDiy.prototype.clear = function (value) {
        this.items = {};
    }

    //size()：返回集合所包含元素的数量。与数组的length属性类似。
    SetDiy.prototype.size = function () {
        // return Object.getOwnPropertyNames(this.items).length;
        return Object.keys(this.items).length;
    }

    

}



var aset = new SetDiy();

//添加元素
aset.add(456);
aset.add(123);
console.log("aset.add(123)", aset.add(123));

//删除元素
aset.remove(123);
console.log("aset.remove(123);", aset.remove(123));
console.log("aset-------长度", aset.size());

//has
console.log("aset.has()", aset.has(123))
console.log("aset.has()", aset.has(456))

//claer
console.log("aset.clear()", aset.clear())
console.log("aset", aset);