let hm = require('./07-helloModule');

/**
 * exports和module.exports
 * - 通过exports只能使用.的方式来向外暴露内部变量
 *  export.xxx = xxx
 * - 而module.exports既可以通过.的形式，也可以直接赋值
 *  module.export.xxx = xxx
 *  module.exports = {}
 */

/*
console.log(hm.name);
console.log(hm.age);
hm.sayName();*/
