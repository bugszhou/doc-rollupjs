# 入门Rollup

Rollup.js是一款JavaScript模块打包工具，默认只支持ES6的包引入方式。对`require`等cmd方式，需要使用插件才能支持。前端著名的vue、react等知名类库的都是采用Rollupjs来打包构建的。Rollupjs比较适合类库、公共库打包构建。

这一节，我们通过编写一个长整型加法的库来创建一个比较通用的Rollup.js目录结构和配置，这个配置满足上一节我们提出的需求。

[Rollup官方文档](https://rollupjs.org/guide/en/#introduction)

[Rollup中文文档](https://www.rollupjs.com/guide/zh)

## 建立项目

### 创建目录结构

```
├── docs // 存储文档
├── src // 源码目录
│   ├─ entry
│   │    ├─ .babelrc // babel配置文件
│   │    └─ index.js  // 入口文件
│   ├─ lib // 存储类库源码
│   │    └─ index.js  // 类库入口文件
├── .gitignore
├── .npmignore
├── index.js // package.json中main的入口文件
├── rollup.config.es5.js // rollup编译成es5规范的配置文件
├── rollup.config.js // rollup编译成umd和esm规范的配置文件
├── package.json
└── README.md
```

在这个目录结构中，我把Rollup的配置文件分成了两个，虽然这样弄存在一定的冗余，但是这种方式职责单一，方便维护。

在`src`的文件目录下，我分成了两个文件夹entry和lib：entry是提供给Rollup打包编译的入口文件，lib是存储类库真正的逻辑源码

## Rollup常用插件

由于Rollup.js要求使用es6的模块规范，所以在编写其配置文件时，需要使用`export`语法导出，不能使用`module.exports`来导出。

我们先来列举一下，基本需要的Rollup插件：

1. rollup-plugin-node-resolve
2. rollup-plugin-commonjs
3. rollup-plugin-babel
4. rollup-plugin-json
5. @joseph184/rollup-plugin-node-builtins
6. rollup-plugin-node-globals
7. rollup-plugin-terser

大致需要这7种插件就能满足一个类库的编写了，下面我们介绍一下这7中插件的作用：

### rollup-plugin-node-resolve

这个插件主要是告诉Rollup如何查找第三方模块。在nodejs中，所有的第三方模块都存放在`node_modules`中，使用这个插件，就是标明遇到第三方模时，都去`node_modules`下面找。

[使用指南](https://github.com/rollup/rollup-plugin-node-resolve)

### rollup-plugin-commonjs

我们大部分都是通过`npm`使用第三方包的，npm全称是node package manager。从名字上看，主要是为了nodejs服务的，然而nodejs是使用cmd也就是commonjs模块规范的。这就导致很多第三方包和Rollup的设计理念冲突，为了实现两者共存，就出现了`rollup-plugin-commonjs`这个插件来解决。

`rollup-plugin-commonjs`的主要作用是把使用cmd规范的包转换成使用es6模块规范。举个栗子：就是把`module.exports`变成`export default`。

由于其他的插件有可能会改变代码的结构，导致影响CommonJS的检测，所以`rollup-plugin-commonjs`应该放在其他插件前使用

[使用指南](https://github.com/rollup/rollup-plugin-commonjs)

### rollup-plugin-babel

这个插件很简单，就是配合babel转换es6/es7等更加高级的语法

[使用指南](https://github.com/rollup/rollup-plugin-babel)

### rollup-plugin-json

`rollup-plugin-json`的主要作用是支持在js文件中引入`json`文件，把`json`文件转换成使用es6模块导出的js对象，例如：转换package.json

```javascript
// import a single property from a JSON file,
// discarding the rest
import { version } from './package.json';
console.log( `running version ${version}` );

// import the whole file as an object
import pkg from './package.json';
console.log( `running version ${pkg.version}` );
```

[使用指南](https://github.com/rollup/rollup-plugin-json)

### `@joseph184/rollup-plugin-node-builtins` 和 `rollup-plugin-node-globals`

这两个插件，是提供nodejs内置方法和全局变量的类库，比如：fs path crypto等等

[使用指南](https://github.com/calvinmetcalf/rollup-plugin-node-builtins#readme)

### `rollup-plugin-terser`

用来压缩混淆代码，和`terser-webpack-plugin`功能一样

[使用指南](https://github.com/TrySound/rollup-plugin-terser#readme)

## 配置Rollup.js配置文件

[点击查看Rollupjs配置指南](https://rollupjs.org/guide/en/#introduction)

### esm和umd的配置

```javascript
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import builtins from '@joseph184/rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { terser } from "rollup-plugin-terser";

export default {
  external: [],
  input: 'src/entry/index.js',
  output: [
    // umd，第三方依赖未打包
    {
      name: 'demo',
      file: 'dist/demo.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // umd压缩后，第三方依赖未打包
    {
      name: 'demo',
      file: 'dist/demo.common.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // 使用es6 import语法
    {
      file: 'dist/demo.esm.js',
      format: 'es',
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
    json(),
    resolve(),
    builtins(),
    commonjs(),
    globals(),
    babel({
      configFile: path.resolve(__dirname, './src/entry/.babelrc'),
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    terser({
      include: [/^.+\.common\.js$/],
    }),
  ],
  watch: {
    clearScreen: true,
    include: 'src/**',
  },
};

```

我们针对几个重点配置说明一下：

- `external` 是避免依赖包一起打包进去的配置项

举个栗子：如果我们在类库中依赖于`lodash`，那么

```git
- external: [],
+ external: ['lodash'],
```

这样配置的话，`lodash`的具体代码就不会打包编译到文件内了

- `input` 入口文件

- `output` 编译输出配置

1. `file`文件生成路径
2. `name`导出包名或者全局对象变量名
3. `format`打包类型：`amd`，`cjs`，`umd`，`esm`，`iife`
`iife` -- 编译成自运行函数

其他的参数，这里就不展开了，很容易理解

### es5配置

```javascript
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import builtins from '@joseph184/rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/entry/index.js',
  output: [
    // umd模式，打包所有的依赖，可供浏览器直接使用
    {
      name: 'demo',
      file: 'dist/demo.dev.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // umd模式，压缩后，打包所有的依赖，可供浏览器直接使用
    {
      name: 'demo',
      file: 'dist/demo.min.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
  ],
  plugins: [
    json(),
    resolve(),
    builtins(),
    commonjs(),
    globals(),
    babel({
      configFile: path.resolve(__dirname, './src/entry/.babelrc'),
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    terser({
      include: [/^.+\.min\.js$/],
    }),
  ],
};
```

和`esm`的配置类似，主要少了`external`。

### 配置`babel`

目前`babel`使用7版本以上的，支持`@babel/runtime-corejs2`内的所有高级语法。具体配置可以查看`src/entry/.babelrc`文件。

该babel配置支持class私有属性、class私有方法、async、await等语法

接下来，进入实战部分：
