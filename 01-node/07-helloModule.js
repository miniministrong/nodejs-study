/*
module.exports.name = "孙悟空";
module.exports.age = 18;
module.exports.sayName = function () {
    console.log("我是孙悟空");
}*/

/*
module.exports = {
    name: "猪八戒",
    age: 20,
    sayName: function () {
        console.log("我是猪八戒");
    }
}*/


let a = 10;
let b = a;
a++;

console.log('a = ' + a);
console.log('b = ' + b);


let obj = {};
obj.name = '猪八戒';
let obj2 = obj;
obj2.name = '孙悟空';
console.log(obj.name);
console.log(obj2.name);