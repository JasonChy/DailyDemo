

import _ from 'lodash';

console.log(_.join([ 'a', 'b', 'c' ], '***'));

/*
第一种方式：
首次访问页面时，加载main.js（2MB）
打包文件会很多，加载时间会很长
main.js 2MB

第二种方式：
main.js被拆成lodash.js（1MB），main.js(1MB)
当页面业务逻辑发生变化时，只要加载main.js即可（1MB）

在项目中会通过对一些公用代码的拆分来提高页面的加载速度，这种拆分就叫做 Code Spliting
*/
