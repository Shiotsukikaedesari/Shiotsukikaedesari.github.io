webpackJsonp([18],{"4ewg":function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",{staticClass:"content markdown-doc"},[t("h2",{attrs:{id:"webpack-gou-jian-gong-ju--ji-chu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-gou-jian-gong-ju--ji-chu"}},[s._v("#")]),s._v(" webpack构建工具-基础")]),s._v(" "),t("h2",{attrs:{id:"xue-xi-di-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xue-xi-di-zhi"}},[s._v("#")]),s._v(" 学习地址")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1e7411j7T5"}},[s._v("https://www.bilibili.com/video/BV1e7411j7T5")])]),s._v(" "),t("h2",{attrs:{id:"guan-fang-wen-dang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guan-fang-wen-dang"}},[s._v("#")]),s._v(" 官方文档")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://webpack.docschina.org/"}},[s._v("https://webpack.docschina.org/")])]),s._v(" "),t("h2",{attrs:{id:"yi-lai-huan-jing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yi-lai-huan-jing"}},[s._v("#")]),s._v(" 依赖环境")]),s._v(" "),t("ul",[t("li",[s._v("Node 10")]),s._v(" "),t("li",[s._v("Webpack 4.26以上")])]),s._v(" "),t("h2",{attrs:{id:"webpack-xia-zai-an-zhuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-xia-zai-an-zhuang"}},[s._v("#")]),s._v(" webpack下载安装")]),s._v(" "),t("p",[t("code",[s._v("npm I webpack-cli –g")])]),s._v(" "),t("h2",{attrs:{id:"webpack-ji-chu-da-bao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-ji-chu-da-bao"}},[s._v("#")]),s._v(" webpack基础打包")]),s._v(" "),t("ul",[t("li",[s._v("开发环境  "),t("code",[s._v("webpack entrysrc –o outsrc –mode=development")])]),s._v(" "),t("li",[s._v("生产环境  "),t("code",[s._v("webpack entrysrc –o outsrc –mode==production")])])]),s._v(" "),t("h2",{attrs:{id:"webpack-de-ji-chu-gong-neng-dian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-de-ji-chu-gong-neng-dian"}},[s._v("#")]),s._v(" webpack的基础功能点")]),s._v(" "),t("ul",[t("li",[s._v("能打包能编译ES6模块")]),s._v(" "),t("li",[s._v("能自动识别js文件与json文件")]),s._v(" "),t("li",[s._v("生产环境会自动压缩js代码")])]),s._v(" "),t("h2",{attrs:{id:"webpack-pei-zhi-wen-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-pei-zhi-wen-jian"}},[s._v("#")]),s._v(" webpack配置文件")]),s._v(" "),t("ul",[t("li",[s._v("固定命名：webpack.config.js")]),s._v(" "),t("li",[s._v("使用commonjs语法")]),s._v(" "),t("li",[s._v("由于打包构建工具是通过nodejs")]),s._v(" "),t("li",[s._v("通过module.exports暴露")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// node的path库中引入resolve拼接绝对路径方法")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {resolve} = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'path'")]),s._v(")\n"),t("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("entry")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'main.js'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 入口文件配置，通过入口文件构建依赖关系树构建。")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("output")]),s._v(": { "),t("span",{staticClass:"hljs-comment"},[s._v("// 输出文件配置")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("filename")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'demo.js'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("//输出名")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("path")]),s._v(": resolve(__dirname, "),t("span",{staticClass:"hljs-string"},[s._v("'dist'")]),s._v(")"),t("span",{staticClass:"hljs-comment"},[s._v("//输出路径")]),s._v("\n  }, \n  "),t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n      {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过正则匹配相应文件")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.xxx/")]),s._v(",\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 所使用的loader，use的处理顺序是从后往前")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("use")]),s._v(": []\n      }\n    ]\n  },\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// plugins的配置，为打包、渲染等进行优化")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("plugins")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细plugins配置")]),s._v("\n  ],\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 打包模式")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("mode")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'development'")]),s._v(","),t("span",{staticClass:"hljs-comment"},[s._v("//mode: 'production'")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 其他配置项")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("devServer")]),s._v(": {}, "),t("span",{staticClass:"hljs-comment"},[s._v("// 开发服务器devServer")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("devtool")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'source-map'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 构建代码源码映射")]),s._v("\n}\n")])]),t("h2",{attrs:{id:"loader-xiang-guan-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader-xiang-guan-pei-zhi"}},[s._v("#")]),s._v(" loader相关配置")]),s._v(" "),t("ul",[t("li",[s._v("需要下载")])]),s._v(" "),t("h3",{attrs:{id:"css-wen-jianloader-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-wen-jianloader-pei-zhi"}},[s._v("#")]),s._v(" css文件loader配置")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过正则匹配相应文件")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.css$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 所使用的loader，use的处理顺序是从后往前")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("use")]),s._v(": [\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i style-laoder -d")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'style-laoder'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 2 创建style标签，将js中的样式资源插入，将style插入到head中")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i css-loader -d")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'css-loader'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 1 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式")]),s._v("\n        ]\n    }\n  ]\n}\n")])]),t("h3",{attrs:{id:"less-wen-jianlaoder-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#less-wen-jianlaoder-pei-zhi"}},[s._v("#")]),s._v(" less文件laoder配置")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过正则匹配相应文件")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.less$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 所使用的loader，use的处理顺序是从后往前")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("use")]),s._v(": [\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i style-laoder -D")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'style-laoder'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 3 创建style标签，将js中的样式资源插入，将style插入到head中")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i css-loader -D")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'css-loader'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 2 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i less -D  npm i less-loader -D")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'less-loader'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 1 将less文件编译成css文件")]),s._v("\n        ]\n    }\n  ]\n}\n")])]),t("h3",{attrs:{id:"tu-pian-wen-jianlaoder-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tu-pian-wen-jianlaoder-pei-zhi"}},[s._v("#")]),s._v(" 图片文件laoder配置")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过正则匹配相应文件")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.(jpg|png|gif)$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i url-loader file-loader -D * url-loader是依赖于flie-loader运行")]),s._v("\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 此loader处理不了html中的图片名转换")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("loader")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'url-loader'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 使用一个loader的时候直接写loader")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("options")]),s._v(": { "),t("span",{staticClass:"hljs-comment"},[s._v("// loader的一般配置")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 优点： 减少请求数量")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 确定： 图片体积会变大")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("limit")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("8")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("1024")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 图片大小小于8k，就会被base64处理")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("esModule")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 默认使用es6模块解析 关闭默认")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'[hash:10].[ext]'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 取图片名前10位加文件原来的扩展名")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("outputPath")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'image'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 指定打包的位置")]),s._v("\n      }\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.html$/")]),s._v(",\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i html-loader -D")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 默认commonjs解析")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("loader")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'html-loader'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 处理html文件的img图片，引入img从而被url-loader处理")]),s._v("\n  ]\n}\n")])]),t("h3",{attrs:{id:"qi-ta-wen-jianlaoder-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-wen-jianlaoder-pei-zhi"}},[s._v("#")]),s._v(" 其他文件laoder配置")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过正则排除正则以外的资源")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("exclude")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.(css|js|html)$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i flue-loader -D")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("loader")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'file-loader'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 原封不动输出资源")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("options")]),s._v(": { "),t("span",{staticClass:"hljs-comment"},[s._v("// loader的一般配置")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'[hash:10].[ext]'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 取图片名前10位加文件原来的扩展名")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("outputPath")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'media'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 指定打包的位置")]),s._v("\n      }\n    }\n  ]\n}\n")])]),t("h3",{attrs:{id:"eslinit-laoder-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslinit-laoder-pei-zhi"}},[s._v("#")]),s._v(" eslinit-laoder配置")]),s._v(" "),t("ul",[t("li",[s._v("需要设置规则：package.json中eslintConfig中设置-airbnb")]),s._v(" "),t("li",[s._v("下载："),t("code",[s._v("exlint-config-airbnb-base")]),s._v("、"),t("code",[s._v("eslint")]),s._v("、"),t("code",[s._v("eslint-plugin-import")])])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.js$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("exclude")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/node_modules/")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 排除不需要检查的文件")]),s._v("\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i eslint-loader -D")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("enforce")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'pre'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 优先执行loader")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("loader")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'eslint-loader'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("options")]),s._v(": { "),t("span",{staticClass:"hljs-comment"},[s._v("// loader的一般配置")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("fix")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 自动修复eslint错误")]),s._v("\n      }\n    }\n  ]\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// packgage.json")]),s._v("\n"),t("span",{staticClass:"hljs-string"},[s._v('"eslintConfig"')]),s._v(": {\n  "),t("span",{staticClass:"hljs-string"},[s._v('"extends"')]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v('"airbnb-base"')]),s._v("\n}\n")])]),t("h3",{attrs:{id:"postcss-loader-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postcss-loader-pei-zhi"}},[s._v("#")]),s._v(" postcss-loader配置")]),s._v(" "),t("ul",[t("li",[s._v("css兼容性处理")]),s._v(" "),t("li",[s._v("postcss-loader、postcss-preset-env")]),s._v(" "),t("li",[s._v("安装： "),t("code",[s._v("npm i prostcss-loader postcss-preset-env -D")])])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("process.env.NODE_ENV = "),t("span",{staticClass:"hljs-string"},[s._v("'development'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 设置node的环境变量为开发环境 默认为 production")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过正则匹配相应文件")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.css$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 所使用的loader，use的处理顺序是从后往前")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("use")]),s._v(": [\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i style-laoder -d")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'style-laoder'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 2 创建style标签，将js中的样式资源插入，将style插入到head中")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i css-loader -d")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'css-loader'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 1 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式")]),s._v("\n        {\n          "),t("span",{staticClass:"hljs-attr"},[s._v("loader")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'postcss-loader'")]),s._v(",\n          "),t("span",{staticClass:"hljs-attr"},[s._v("opotions")]),s._v(": {\n            "),t("span",{staticClass:"hljs-attr"},[s._v("ident")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'postcss'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 固定写法")]),s._v("\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 帮助postcss在package.json中的broserlist里面的配置，通过配置加载相应的css样式")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("plugins")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" ["),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'postcss-preset-env'")]),s._v(")()]\n          }\n        }\n        ]\n    }\n  ]\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// package.json")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 读取的环境值需要根据node环境便来：process.env.NODE_ENV = development")]),s._v("\n"),t("span",{staticClass:"hljs-string"},[s._v('"browserslist"')]),s._v(": {\n  "),t("span",{staticClass:"hljs-string"},[s._v('"development"')]),s._v(": [\n    "),t("span",{staticClass:"hljs-string"},[s._v('"last 1 chrome version"')]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 兼容最近一个谷歌浏览器版本")]),s._v("\n    "),t("span",{staticClass:"hljs-string"},[s._v('"last 1 firefox version"')]),s._v(",\n    ...\n  ],\n  "),t("span",{staticClass:"hljs-string"},[s._v('"production"')]),s._v(": [\n    "),t("span",{staticClass:"hljs-string"},[s._v('">0.2%"')]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 大于99.8%的浏览器兼容")]),s._v("\n    "),t("span",{staticClass:"hljs-string"},[s._v('"not dead"')]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 不兼容ie10等已经不存在的浏览器")]),s._v("\n    "),t("span",{staticClass:"hljs-string"},[s._v('"not op_mini all"')]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 不兼容op_mini的浏览器")]),s._v("\n  ]\n}\n")])]),t("h3",{attrs:{id:"babel-laoder-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-laoder-pei-zhi"}},[s._v("#")]),s._v(" babel-laoder配置")]),s._v(" "),t("ul",[t("li",[s._v("兼容性处理")]),s._v(" "),t("li",[s._v("需要下载： "),t("code",[s._v("babel-loader")]),s._v("、"),t("code",[s._v("@babel/core")])]),s._v(" "),t("li",[s._v("基本js兼容性处理库："),t("code",[s._v("@babel/preset-env")])]),s._v(" "),t("li",[s._v("全部js兼容处理： "),t("code",[s._v("@babel/polyfill")]),s._v(" -- 只用在入口位置引用此库就行，较为暴力，体积较大")]),s._v(" "),t("li",[s._v("按需js兼容性处理： "),t("code",[s._v("core.js")])])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// loader配置，为webpack加载其他格式文件")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.js$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i babel-loader -D")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("loader")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'babel-loader'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("exclude")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/node_modules/")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 排除不需要检查的文件")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("options")]),s._v(": { "),t("span",{staticClass:"hljs-comment"},[s._v("// loader的一般配置")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i @babel/preset-env -D")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 预设，指示babel做怎么样的兼容处理")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("presets")]),s._v(": [\n          "),t("span",{staticClass:"hljs-string"},[s._v("'@babel/preset-env'")]),s._v("，\n          {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 按需加载兼容性处理")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("useBuiltIns")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'usage'")]),s._v(",\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 指定core-js版本")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("corejs")]),s._v(": {\n              "),t("span",{staticClass:"hljs-attr"},[s._v("version")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("\n            },\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 指定兼容性做到哪个版本浏览器")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("targets")]),s._v(": {\n              "),t("span",{staticClass:"hljs-attr"},[s._v("chorme")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'60'")]),s._v(",\n              "),t("span",{staticClass:"hljs-attr"},[s._v("ie")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'9'")]),s._v(",\n              "),t("span",{staticClass:"hljs-attr"},[s._v("firefox")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'60'")]),s._v("\n              ...\n            },\n            "),t("span",{staticClass:"hljs-attr"},[s._v("cacheDirectory")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 开启babel缓存，第二次构建时，读取缓存 ")]),s._v("\n          }\n          ]\n      }\n    }\n  ]\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// packgage.json")]),s._v("\n"),t("span",{staticClass:"hljs-string"},[s._v('"eslintConfig"')]),s._v(": {\n  "),t("span",{staticClass:"hljs-string"},[s._v('"extends"')]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v('"airbnb-base"')]),s._v("\n}\n")])]),t("h2",{attrs:{id:"pllugins-xiang-guan-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pllugins-xiang-guan-pei-zhi"}},[s._v("#")]),s._v(" pllugins相关配置")]),s._v(" "),t("ul",[t("li",[s._v("需要下载")]),s._v(" "),t("li",[s._v("需要引入")])]),s._v(" "),t("h3",{attrs:{id:"html-cha-jian-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-cha-jian-pei-zhi"}},[s._v("#")]),s._v(" HTML插件配置")]),s._v(" "),t("ul",[t("li",[s._v("自动生成或者按照模板生成html文件，引入打包文件")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" HtmlWebpackPlugin = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'html-webpack-plugin'")]),s._v(")\n"),t("span",{staticClass:"hljs-comment"},[s._v("// plugins的配置，为打包、渲染等进行优化")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("plugins")]),s._v(": [\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细plugins配置")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i html-webpack-plugin -D")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" HtmlWebpackPlugin({ "),t("span",{staticClass:"hljs-comment"},[s._v("// 默认会创建一个html文件，引入打包输出的所有资源")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("template")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'./index.html'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 规定一个html文件模板并引入打包输出的所有资源")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 压缩html代码配置")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("minify")]),s._v(": {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("collapseWhitespace")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 移除空格")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("removeComment")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 移除注释")]),s._v("\n    }\n  })\n]\n")])]),t("h3",{attrs:{id:"min-css-extract-cha-jian-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min-css-extract-cha-jian-pei-zhi"}},[s._v("#")]),s._v(" min-css-extract插件配置")]),s._v(" "),t("ul",[t("li",[s._v("将css独立成文件")]),s._v(" "),t("li",[s._v("此插件要配合自身loader使用，不使用style-laoder")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" MiniCssExtractPlugin = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'mini-css-extract-plugin'")]),s._v(")\n"),t("span",{staticClass:"hljs-comment"},[s._v("// plugins的配置，为打包、渲染等进行优化")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("module")]),s._v(": {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("rules")]),s._v(": [\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细loader配置")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过正则匹配相应文件")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\.css$/")]),s._v(",\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 所使用的loader，use的处理顺序是从后往前")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("use")]),s._v(": [\n        MiniCssExtractPlugin.loader, "),t("span",{staticClass:"hljs-comment"},[s._v("// 提取js中的css为单独文件")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i css-loader -d")]),s._v("\n        "),t("span",{staticClass:"hljs-string"},[s._v("'css-loader'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 1 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式")]),s._v("\n        ]\n    }\n  ]\n},\n"),t("span",{staticClass:"hljs-attr"},[s._v("plugins")]),s._v(": [\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细plugins配置")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// npm i mini-css-extract-plugin -D")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" MiniCssExtractPlugin({ "),t("span",{staticClass:"hljs-comment"},[s._v("// 会提取js中的css单独创建css文件")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("filename")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'路径+文件名'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 输出该文件到此路径下")]),s._v("\n  })\n]\n")])]),t("h3",{attrs:{id:"optimize-css-assets-webpack-plugin-cha-jian-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimize-css-assets-webpack-plugin-cha-jian-pei-zhi"}},[s._v("#")]),s._v(" optimize-css-assets-webpack-plugin插件配置")]),s._v(" "),t("ul",[t("li",[s._v("压缩css打包代码")]),s._v(" "),t("li",[s._v("安装："),t("code",[s._v("npm i optimize-css-assets-webpack-plugin -D")])])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" OptimizeCssAssetsWebpackPlugin = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'optimize-css-assets-webpack-plugin'")]),s._v(")\n"),t("span",{staticClass:"hljs-comment"},[s._v("// plugins的配置，为打包、渲染等进行优化")]),s._v("\n"),t("span",{staticClass:"hljs-attr"},[s._v("plugins")]),s._v(": [\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 详细plugins配置")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" OptimizeCssAssetsWebpackPlugin()\n]\n")])]),t("h2",{attrs:{id:"devserver-kai-fa-fu-wu-qi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devserver-kai-fa-fu-wu-qi"}},[s._v("#")]),s._v(" devServer开发服务器")]),s._v(" "),t("ul",[t("li",[s._v("进行相关自动化操作-编译、打开浏览器、刷新...")]),s._v(" "),t("li",[s._v("只会在内存中编译打包，不会有任何输出")]),s._v(" "),t("li",[s._v("下载："),t("code",[s._v("npm i webpack-dev-server -D")])]),s._v(" "),t("li",[s._v("运行："),t("code",[s._v("npx webpack-dev-server")])])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("devServer: {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("contentBase")]),s._v(": resolve(__dirname, "),t("span",{staticClass:"hljs-string"},[s._v("'dist'")]),s._v("), "),t("span",{staticClass:"hljs-comment"},[s._v("// 运行目录，打包后的目录")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("comporess")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 是否启动Gzip压缩")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("port")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("3000")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 端口号")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("open")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 自动打开本地默认浏览器")]),s._v("\n  "),t("span",{staticClass:"hljs-attr"},[s._v("hot")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 开启HMR功能 只更行修模块改部分的代码")]),s._v("\n}\n")])])])}]};var l={data:function(){return{}},mounted:function(){},components:{Markdown:t("VU/8")(null,n,!1,function(s){t("P951")},"data-v-1ee17c5e",null).exports}},e={render:function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"markdown"},[a("Markdown")],1)},staticRenderFns:[]};var v=t("VU/8")(l,e,!1,function(s){t("u9es")},"data-v-62d7d832",null);a.default=v.exports},P951:function(s,a,t){var n=t("Zwle");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("19a090b0",n,!0,{})},Zwle:function(s,a,t){(s.exports=t("FZ+f")(!1)).push([s.i,"",""])},u9es:function(s,a){}});