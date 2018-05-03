/**
 * Created by wb-qyp273848 on 2017/5/22.
 */

// 构造函数的prototype属性，在ES6的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
class Point {
    constructor() {
        // ...
    }

    toString() {
        // ...
    }

    toValue() {
        // ...
    }
}

// 等同于
Point.prototype = {
    toString(){},
    toValue(){}
};