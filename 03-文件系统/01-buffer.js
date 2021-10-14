/**
 * Buffer(缓冲区)
 * - Buffer的结构和数组很像，操作的方法也和数组类似
 * - 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
 * - 使用buffer文件不需要引入模块，直接使用即可
 * - 在buffer中存储的都是二进制数据，但是在显示的时候都是以16进制的形式显示
 *  buffer中每一个元素的范围是从
 *      00-ff
 *      0-255
 *      00000000 - 11111111
 *  buffer中的一个元素，占用内存的一个字节
 * - Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作
 */

let str = "hello Buffer";
// 讲一个字符串保存到buffer中
let buf = Buffer.from(str);
console.log(buf);
console.log(buf.length); // 占用内存的大小
console.log(str.length); // 字符串的长度

// 创建一个指定大小的buffer
// buffer构造函数不推荐使用
let buf2 = new Buffer(10);
console.log(buf2.length);

// 创建一个10个字节的buffer
let buf3 = Buffer.alloc(10);
buf3[0] = 88;
buf3[1] = 255;
buf3[2] = 0xaa;
buf3[3] = 255;
// 只要数字在控制台或页面中输出一定是十进制
console.log(buf3[2].toString(16));

for (let i = 0; i < buf3.length; i++) {
    console.log(buf3[i]);
}

// Buffer.allocUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
let buf4 = Buffer.allocUnsafe(10);
console.log(buf4);

/**
 * Buffer.from(str)：将一个字符串转换为buffer
 * Buffer.alloc(size)：创建一个指定大小的Buffer
 * Buffer.allocUnsafe(size)：创建一个指定大小的Buffer，但是可能包含敏感数据
 * buf.toString() ：将缓冲区中的数据转换为字符串
 */

let buf5 = Buffer.from('我是一段文本数据');
console.log(buf5.toString());
