/**
 * Created by wb-qyp273848 on 2017/5/22.
 */

// 使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致
class Bar {
    doStuff() {
    console.log("你好！");
    }
}

var b = new Bar();
b.doStuff();