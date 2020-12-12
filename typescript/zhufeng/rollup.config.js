import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import path from 'path';

export default {
    input: 'src/index.ts',
    output: {
        format: 'iife', // 立即执行 = 自执行性函数
        file: path.resolve(__dirname, 'dist/bundle.js '),
        sourcemap: true, // 根据源码产生映射文件
    },
    plugins: [
        nodeResolve({ // 第三方文件解析
            extensions: ['.js', '.ts']
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        serve({
            openPage: '/public/index.html',
            contentBase: '',
            port: 8080,
        })
    ]
}