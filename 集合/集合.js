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
        if (this.has(value)) return false;

        this.items[value] = value; // 键和值都是value
        return true;
    }

    // 判断集合中是否有某个元素
    SetDiy.prototype.has = function (value) {
        return this.items.hasOwnProperty(value);
    }

    // remove(value)：从集合移除一个值
    SetDiy.prototype.remove = function (value) {
        if (!this.has(value)) return false; // 若没有返回
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

    // values()：返回一个包含集合中所有值的数组。
    SetDiy.prototype.values = function () {
        return Object.keys(this.items) // 有兼容
    }
    // 集合间的操作
    // 并集 
    SetDiy.prototype.union = function (otherSet) {
        // this: 集合对象A
        //otherSet:集合对象B

        // 1.创建新的集合
        var unionSet = new SetDiy();

        // 2.将A集合所有的元素添加到新的集合中
        var valueA = this.values();
        for (let i = 0; i < valueA.length; i++) {
            unionSet.add(valueA[i]);
        }

        //取出B集合中所有的元素添加到新的集合中
        var valueB = otherSet.values();
        for (let i = 0; i < valueB.length; i++) {
            unionSet.add(valueB[i]); //  添加前会判断unionSet里有没有
        }
        return unionSet;
    }

    //交集
    SetDiy.prototype.intersection = function (otherSet) {
        //this: 集合对象A
        //otherSet: 集合对象B

        //1.创建新的集合
        var intersectionSet = new SetDiy();

        // 2. 从A中取出一个个元素，判断是否同时存在于集合B中，若存在，就放入新集合中
        var values = this.values();
        for (let i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }  
        }
        return intersectionSet;
    }

    //差集  (就是A交集减去与B的交集) 与数学上的差集有区别？ 数学上的差集是非交集
    SetDiy.prototype.difference = function (otherSet) {
        //this: 集合对象A
        //otherSet: 集合对象B

        //1.创建新的集合
        var differenceSet = new SetDiy();

        // 2. 从A中取出一个个元素，判断是否同时存在于集合B中，若不存在，就放入新集合中
        var values = this.values();
        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }  
        }
        // var values = otherSet.values();
        // for (let i = 0; i < values.length; i++) {
        //     if(!this.has(values[i])){
        //         differenceSet.add(values[i]);
        //     }  
        // }
        return differenceSet;
    }

    //子集 setdiy 是otherSet的子集吗
    SetDiy.prototype.subset = function(otherSet){
        // this: 集合A
        // otherSet: 集合B

        //遍历集合A中所有的元素，如果发现集合A中的元素在集合B中不存在，那么返回false
        var values = this.values();
        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])){
                return false
            }  
        }
        return true;
    }



}



var aset = new SetDiy();

//添加元素
aset.add(456);
aset.add(123);
// console.log("aset.add(123)", aset.add(123));

//删除元素
// aset.remove(123);
// console.log("aset.remove(123);", aset.remove(123));
// console.log("aset-------长度", aset.size());

//has
// console.log("aset.has()", aset.has(123))
// console.log("aset.has()", aset.has(456))

//claer
// console.log("aset.clear()", aset.clear())



// values()：返回一个包含集合中所有值的数组。
// console.log("aset.values()", aset.values())
console.log("aset", aset);

// 并集
// var bset = new SetDiy();
// bset.add('abc');
// bset.add('cba');
// bset.add(123);
// // aset.union(bset)
// console.log("bset", bset);
// console.log("aset.union(bset)", aset.union(bset).values())


//求两个集合的交集
// var bset = new SetDiy();
// bset.add('abc');
// bset.add('cba');
// bset.add(123);
// // aset.union(bset)
// console.log("bset", bset);
// console.log("aset.intersection(bset)", aset.intersection(bset).values())

// 求两个集合的差值 
// var bset = new SetDiy();
// bset.add('abc');
// bset.add('cba');
// bset.add(123);
// // aset.union(bset)
// console.log("bset", bset);
// console.log("aset.difference(bset)", aset.difference(bset).values())


// aset是bset的子集吗？
var bset = new SetDiy();
// bset.add(456);
bset.add(123);
// aset.union(bset)
console.log("bset", bset);
console.log("aset.difference(bset)", aset.subset(bset))