/**
 * 流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

let fs = require("fs");

//创建一个可读流
let rs = fs.createReadStream("./sources/a.mp3");
//创建一个可写流
let ws = fs.createWriteStream("b.mp3");

//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);



