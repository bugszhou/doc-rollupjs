(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(s,e,t){s.exports=t.p+"assets/img/esm_demo.f2e2fedb.png"},186:function(s,e,t){s.exports=t.p+"assets/img/umd_demo.7ac0bf39.png"},195:function(s,e,t){"use strict";t.r(e);var r=t(0),_=Object(r.a)({},function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"编写类库的需求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编写类库的需求","aria-hidden":"true"}},[s._v("#")]),s._v(" 编写类库的需求")]),s._v(" "),r("ol",[r("li",[s._v("支持浏览器直接使用的压缩后的js文件和可供调试未压缩混淆的js文件")]),s._v(" "),r("li",[s._v("支持在es6环境下直接使用esm(es6)的模块，未压缩的js文件")]),s._v(" "),r("li",[s._v("使用umd不打包依赖的包，压缩和未压缩的js文件")])]),s._v(" "),r("p",[s._v("需要生效5个js文件")]),s._v(" "),r("p",[s._v("我们先解释一下，这5个文件的用途：")]),s._v(" "),r("ul",[r("li",[r("ol",[r("li",[s._v("支持浏览器直接使用的压缩后的js文件和可供调试未压缩混淆的js文件")])])])]),s._v(" "),r("p",[s._v("这个两个js文件，包含了所有的依赖包。如果其他业务逻辑有相同的依赖，会存在重复的相同代码。这种方式的好处就是可以直接使用，不需要直接引用，通常使用"),r("code",[s._v("script")]),s._v("标签来引用。压缩和未压缩文件只是为了方便使用者调试代码。")]),s._v(" "),r("ul",[r("li",[r("ol",{attrs:{start:"2"}},[r("li",[s._v("支持在es6环境下直接使用esm(es6)的模块，未压缩的js文件")])])])]),s._v(" "),r("p",[s._v("目前很多项目都是使用webpack等工程化构建工具来研发的，使用esm模块的功能，可以避免相同依赖包多次打包。因为esm包是使用"),r("code",[s._v("import、export")]),s._v("等es6的模块化语法，能够支持tree-shaking，减少无用代码。")]),s._v(" "),r("p",[s._v("打包后的效果如图：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(185),alt:"esm"}})]),s._v(" "),r("ul",[r("li",[r("ol",{attrs:{start:"3"}},[r("li",[s._v("使用umd不打包依赖的包，压缩和未压缩的js文件")])])])]),s._v(" "),r("p",[s._v("这种打包方式，主要是使用umd的模块规范，开发者在使用该模块时，需要自行处理相关依赖包。")]),s._v(" "),r("p",[s._v("打包后的效果如图：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(186),alt:"umd"}})]),s._v(" "),r("p",[s._v("下面我们定义一下编译后的文件名：")]),s._v(" "),r("pre",[r("code",[s._v("包名.dev.js -- 用于浏览器直接引用的开发版，未压缩\n包名.min.js -- 用于浏览器直接引用的生产版，压缩混淆\n包名.esm.js -- 用于webpack等构建工具，使用`import、export`等es6模块化语法\n包名.common.js -- 使用`umd`模块规范的压缩混淆版\n包名.js -- 使用`umd`模块规范的未压缩混淆版\n\n例如：lodash.dev.js/lodash.min.js/lodash.esm.js/lodash.common.js/lodash.js\n")])]),s._v(" "),r("ul",[r("li",[r("strong",[s._v("什么是umd模块规范方案"),r("a",{attrs:{href:"https://segmentfault.com/a/1190000012419990",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看"),r("OutboundLink")],1)])])])])},[],!1,null,null,null);e.default=_.exports}}]);