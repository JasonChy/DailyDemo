/**
 * Created by wb-qyp273848 on 2017/5/22.
 */

// 定义
    /*ES6的类，完全可以看作构造函数的另一种写法。
    * 类的数据类型就是函数，类本身就指向构造函数。
    * */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '('+this.x+','+this.y+')'
    }
}

var poiont = new Point(225,336);

console.log( typeof Point );
console.log( Point === Point.prototype.constructor );
