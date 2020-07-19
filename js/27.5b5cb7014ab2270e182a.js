webpackJsonp([27],{"1g0q":function(s,a,t){(s.exports=t("FZ+f")(!1)).push([s.i,"",""])},Q6vM:function(s,a){},Zv6q:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",{staticClass:"content markdown-doc"},[t("h2",{attrs:{id:"gulp-gou-jian-gong-ju--ji-chu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-gou-jian-gong-ju--ji-chu"}},[s._v("#")]),s._v(" gulp构建工具-基础")]),s._v(" "),t("h2",{attrs:{id:"xue-xi-di-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xue-xi-di-zhi"}},[s._v("#")]),s._v(" 学习地址")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV11J411y7N"}},[s._v("https://www.bilibili.com/video/BV11J411y7N")])]),s._v(" "),t("h2",{attrs:{id:"guan-fang-wen-dang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guan-fang-wen-dang"}},[s._v("#")]),s._v(" 官方文档")]),s._v(" "),t("p",[t("a",{attrs:{href:"gulpjs.com.cn"}},[s._v("gulpjs.com.cn")])]),s._v(" "),t("h2",{attrs:{id:"yi-lai-huan-jing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yi-lai-huan-jing"}},[s._v("#")]),s._v(" 依赖环境")]),s._v(" "),t("ul",[t("li",[s._v("Node")]),s._v(" "),t("li",[s._v("gulp 3.0以上")])]),s._v(" "),t("h2",{attrs:{id:"gulp-xia-zai-an-zhuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-xia-zai-an-zhuang"}},[s._v("#")]),s._v(" gulp下载安装")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("npm i gulp –g")])]),s._v(" "),t("li",[t("code",[s._v("npm i gulp –D")])])]),s._v(" "),t("h2",{attrs:{id:"gulp-pei-zhi-wen-jian-gulpfile.js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-pei-zhi-wen-jian-gulpfile.js"}},[s._v("#")]),s._v(" gulp配置文件-gulpfile.js")]),s._v(" "),t("ul",[t("li",[s._v("依赖commonJS规范")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" gulp = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'gulp'")]),s._v(")\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// code ...")]),s._v("\n")])]),t("h2",{attrs:{id:"gulp-he-xin-nei-zhi-han-shu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-he-xin-nei-zhi-han-shu"}},[s._v("#")]),s._v(" gulp核心内置函数")]),s._v(" "),t("ul",[t("li",[s._v("gulp.src() 找到源文件路径")]),s._v(" "),t("li",[s._v("gulp.dest() 找到目标文件路径写入，不存在会创建")]),s._v(" "),t("li",[s._v(".pipe() 程序管道，进行文件传输操作，调用方法操作")])]),s._v(" "),t("h2",{attrs:{id:"gulp-wen-jian-biao-da"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-wen-jian-biao-da"}},[s._v("#")]),s._v(" gulp文件表达")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("img/*.png")]),s._v(" img目录下所有png文件")]),s._v(" "),t("li",[t("code",[s._v("img/*.{png, jpg}")]),s._v(" img下所有png和jpg文件、")]),s._v(" "),t("li",[t("code",[s._v("img/*/*")]),s._v(" img下所有二级目录文件")]),s._v(" "),t("li",[t("code",[s._v("img/**/*")]),s._v(" img下所有文件")]),s._v(" "),t("li",[t("code",[s._v('gulp.src(["json/*.json", "xml/*.xml", "!xml/1.xml"])')]),s._v(" 读取json与xml文件夹下所有文件，并排除xml下1.xml文件")])]),s._v(" "),t("h2",{attrs:{id:"gulp.task-ren-wu-zhi-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp.task-ren-wu-zhi-xing"}},[s._v("#")]),s._v(" gulp.task任务执行")]),s._v(" "),t("ul",[t("li",[s._v("单任务执行")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("gulp.task("),t("span",{staticClass:"hljs-string"},[s._v("'test'")]),s._v(", "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// some code")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" \n})\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// node")]),s._v("\ngulp test\n")])]),t("ul",[t("li",[s._v("多任务执行")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("gulp.task("),t("span",{staticClass:"hljs-string"},[s._v("'test1'")]),s._v(", "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// some code")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" \n})\ngulp.task("),t("span",{staticClass:"hljs-string"},[s._v("'test2'")]),s._v(", "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// some code")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" \n})\ngulp.task("),t("span",{staticClass:"hljs-string"},[s._v("'test3'")]),s._v(", "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// some code")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" \n})\n\ngulp.task("),t("span",{staticClass:"hljs-string"},[s._v("'bulid'")]),s._v(", ["),t("span",{staticClass:"hljs-string"},[s._v("'test1'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'test2'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'test3'")]),s._v("], "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 执行完毕")]),s._v("\n})\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// node")]),s._v("\ngulp build\n")])]),t("h2",{attrs:{id:"gulp-jian-ting-gulp.watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-jian-ting-gulp.watch"}},[s._v("#")]),s._v(" gulp监听-gulp.watch")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("gulp.tast("),t("span",{staticClass:"hljs-string"},[s._v("'watch'")]),s._v(", "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// param1 监听文件路径")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// param2 执行任务")]),s._v("\n  gulp.watch("),t("span",{staticClass:"hljs-string"},[s._v("'/src'")]),s._v(", ["),t("span",{staticClass:"hljs-string"},[s._v("'test1'")]),s._v("])\n  gulp.watch("),t("span",{staticClass:"hljs-string"},[s._v("'/img'")]),s._v(", ["),t("span",{staticClass:"hljs-string"},[s._v("'test2'")]),s._v("])\n})\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// node")]),s._v("\ngulp watch\n")])]),t("h2",{attrs:{id:"gulp-cha-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-cha-jian"}},[s._v("#")]),s._v(" gulp插件")]),s._v(" "),t("ul",[t("li",[s._v("需要下载")]),s._v(" "),t("li",[s._v("需要引入")]),s._v(" "),t("li",[s._v("用法参考官方文档 "),t("a",{attrs:{href:"https://gulpjs.com/plugins/"}},[s._v("https://gulpjs.com/plugins/")])])]),s._v(" "),t("h2",{attrs:{id:"gulp-ming-ling-qi-dong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-ming-ling-qi-dong"}},[s._v("#")]),s._v(" gulp命令启动")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("gulp.task("),t("span",{staticClass:"hljs-string"},[s._v("'default'")]),s._v(", ["),t("span",{staticClass:"hljs-string"},[s._v("'watch'")]),s._v(", ...])\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("//node")]),s._v("\ngulp\n")])])])}]};var l={data:function(){return{}},mounted:function(){},components:{Markdown:t("VU/8")(null,n,!1,function(s){t("cp9w")},"data-v-104d763c",null).exports}},i={render:function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"markdown"},[a("Markdown")],1)},staticRenderFns:[]};var v=t("VU/8")(l,i,!1,function(s){t("Q6vM")},"data-v-24ab9f74",null);a.default=v.exports},cp9w:function(s,a,t){var n=t("1g0q");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("65c5edac",n,!0,{})}});