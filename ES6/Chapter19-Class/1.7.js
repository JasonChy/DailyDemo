/**
 * Created by wb-qyp273848 on 2017/5/22.
 */

    /*在"类的实例"上面调用“成员方法”，其实就是调用“类的原型”上的方法
    * */
class Point {
    constructor() {
        // ...
    }
}
/*
* 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
* */
Object.assign(Point.prototype, {
    toString(){},
    toValue(){}
});
/*prototype对象的constructor属性，直接指向“类”的本身，这与ES5的行为是一致的。*/
Point.prototype.constructor === Point;
