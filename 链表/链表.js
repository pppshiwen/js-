//append(element)：向列表尾部添加一个新的项
// insert(position, element)：向列表的特定位置插入一个新的项。
// get(position), 获取对应位置的元素
// update(position,element),修改某个位置的元素
// remove(element)：从列表中移除一项。
// indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
// removeAt(position)：从列表的特定位置移除一项。
// isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
// size()：返回链表包含的元素个数。与数组的length属性类似。
// toString()：由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。

/*
总结：
方法要画图，不理解就画图
链表的遍历是从this.head开始的
遍历的判断条件用while
累加是currentNode = currentNode.next;

*/

//封装链表的结构函数
function LinkedList() {
    //属性---------

    //封装一个Node类，用于保存每个节点信息
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    //长度
    this.length = 0; //链表的长度
    //指向
    this.head = null; //链表的第一个节点,火车头
    //方法----------
    //append(element)：向列表尾部添加一个新的项
    //思路，先判断是不是第一个，是就赋值给头部
    //否就，判断每个节点的next是否为null,是就说明为最后一个，把next指向当前节点
    //否就，循环

    LinkedList.prototype.append = function (element) {
        var newNode = new Node(element);
        if (this.length == 0) {
            this.head = newNode;
        } else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        };
        this.length += 1;
    };

    //向特定的位置插入一个新的项, 下标从零开始
    LinkedList.prototype.insert = function (position, element) {
        //限制范围
        if (position < 0 || position > this.length) return;
        //思路，把前一个next指向当前插入的，当前插入的next指向之前的下一个
        var newNode = new Node(element);
        if (position === 0) {
            // var tempNode = this.head;
            // this.head = newNode;
            // this.head.next = tempNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            var count = 0;
            var currentNode = this.head;
            var previewNode = null;

            while (count++ < position) { // 先判断后累加
                previewNode = currentNode;
                currentNode = currentNode.next;
            }
            newNode.next = currentNode;
            previewNode.next = newNode;

        }
        this.length += 1;
    };

    // get(position), 获取对应位置的元素
    LinkedList.prototype.get = function (position) {
        // 越界判断
        if (position < 0 || position >= this.length) return null;
        var currentNode = this.head;
        var count = 0;
        while (count++ < position) {
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

    //update(position,element),修改某个位置的元素
    LinkedList.prototype.update = function (position,element){
        // 越界判断
        if(position < 0 || position >= this.length)return false;
        var currentNode = this.head
        var count = 0;
        while(count++ < position){
            currentNode = currentNode.next;
        }
        currentNode.element = element;
        return true;
    }

    // indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
    LinkedList.prototype.indexOf= function (element){
        var currentNode = this.head;
        var count = 0;
        while(currentNode){
            
            if(currentNode.element === element){
                return count //这个会返回给最外面的方法
            }
            currentNode = currentNode.next;
            count += 1;
        }
        return -1;
    }

    //删除其中一项
    LinkedList.prototype.removeAt = function (position) {
        //判断界限
        if (position < 0 || position >= this.length) return null;
        var currentNode = this.head;
        if (position == 0) {
            this.head = this.head.next;
        } else {
            
            previewNode = null;
            var count = 0;
            while (count++ < position) {
                previewNode = currentNode;
                currentNode = currentNode.next;
            }
            previewNode.next = currentNode.next;
        }
        this.length -= 1;
        return currentNode.element;
    }

    // remove(element)：从列表中移除一项
    LinkedList.prototype.remove = function(element){
        var position = this.indexOf(element);
        return this.removeAt(position);
    }

    //打印
    LinkedList.prototype.toString = function () {
        if (this.length == 0) return;
        var currentNode = this.head;
        var tempStr = '';
        while (currentNode.next) {
            tempStr += tempStr == '' ? `${currentNode.element}` : `,${currentNode.element}`;

            // console.log("LinkedList.prototype.toString -> tempStr", tempStr)
            currentNode = currentNode.next;

        }
        tempStr += `,${currentNode.element}`;
        return tempStr;
    };

    // isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
    LinkedList.prototype.isEmpty = function(){
        return this.length == 0;
    }

    // size()：返回链表包含的元素个数。与数组的length属性类似
    LinkedList.prototype.size = function(){
        return this.length;
    }
};



var list = new LinkedList();
list.append('1');
list.append('2');
list.append('3');
list.append('4');
// console.log('------',list);

// 测试insert方法
// list.insert(2, '5');

//测试get方法
// console.log("list", list.get(2));
// console.log("list", list.get(0));
// console.log("list", list.get(3));
// console.log("list", list.get(1));

//测试indexOf方法
// console.log('list', list.indexOf('2'))


//测试update(position,element)
// list.update(2,'10');


//测试removeAt方法
// list.removeAt(0);

console.log('list',list.toString());
// alert(list.toString())