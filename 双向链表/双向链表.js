//双向链表，整一条链里面，有头部节点和尾部节点
// 每个节点，既有指向前一个的，也有指向后一个的

//方法
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



//双向链表
function DoublyLinkedList() {

    //创建内部类，用于创建节点
    function Node(data){
        this.data = data;
        this.prev = null;//前一个
        this.next = null;//后一个
    }

    //头
    this.head = null;
    //尾
    this.tail = null;
    //长度
    this.length = 0;

    //常见的方法
    
    //append 向列表尾部添加一个新的项
    DoublyLinkedList.prototype.append = function(data){
        var newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length +=1;
    }

    // toString
    DoublyLinkedList.prototype.toString = function(){
        return this.backwardString();
    }

    // forwardString 从后向前打印
    DoublyLinkedList.prototype.forwardString = function(){
        if(this.length == 0) return'';

        var currentNode = this.tail;
        var str = '';
        //依次向前遍历，获取每一个节点
        while(currentNode){
            str += currentNode.data + ' ';
            currentNode = currentNode.prev;
        }
        return str;
    }

    // backwardString 从前开始打印
    DoublyLinkedList.prototype.backwardString = function(){
        // return ''
        if(this.length == 0) return'';

        var currentNode = this.head;
        var str = '';
        // 依次向后遍历，获取每个节点
        while(currentNode){
            str += currentNode.data + ' ';
            currentNode = currentNode.next;
        }
        return str;
    }
}

//测试append(data)
var link = new DoublyLinkedList();
link.append('1');
link.append('2');
link.append('3');
link.append('4');

//测试backwardString()方法
console.log("link", link.backwardString());
//测试forwardString()方法
console.log('link',link.forwardString());