/**
 * Created by wb-qyp273848 on 2017/5/22.
 */

    /*在"类的实例"上面调用“成员方法”，其实就是调用“类的原型”上的方法
    * */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '('+this.x+','+this.y+')'
    }

    see() {
        console.log("瞎看看！");
    }
}

var poiont = new Point(225,336);

console.log( poiont.see === Point.prototype.see );
