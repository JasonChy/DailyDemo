/**
 * Created by wb-qyp273848 on 2017/5/22.
 */

// 定义
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '('+this.x+','+this.y+')'
    }
}

var poiont = new Point( 225,336 );

console.log(poiont);
console.log(poiont.toString());
