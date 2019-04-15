// tree shaking 只打包要引入的模块，不引入不用的模块，
// tree shaking只支持ES模块（import方式的引入）
// tree shaking不支持require的引入方式，因为ES模块的引入底层是静态引入的方式，不支持动态引入的方式


import { add } from './math';

add(1, 2);
