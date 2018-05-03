/**
 * Created by wb-qyp273848 on 2017/5/22.
 */

function Point( x, y ) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return "("+ this.x + "," + this.y+ ")";
};

var p = new Point( 2, 3 );

console.log( p.toString() );