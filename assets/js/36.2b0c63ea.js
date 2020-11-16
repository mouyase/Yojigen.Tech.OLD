(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{553:function(a,t,e){"use strict";e.r(t);var s=e(4),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("在项目中引用了OKHTTP依赖并调用了其代码之后，如果直接编译运行的话，会提示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Static interface methods are only supported starting with Android N (--min-api 24)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("出现这种情况会很尴尬，因为如果真的把最低API设置为24的话，可能很多国产手机都没办法运行我们的项目了。")]),a._v(" "),e("p",[a._v("其实解决方案很简单，只要在Module的"),e("code",[a._v("build.gradle")]),a._v("文件里面的"),e("code",[a._v("android")]),a._v("节点里，添加：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("compileOptions {\n\t\t\tsourceCompatibility JavaVersion.VERSION_1_8\n\t\t\ttargetCompatibility JavaVersion.VERSION_1_8\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("就行了。")]),a._v(" "),e("p",[a._v("实际上是因为新版的OKHTTP使用了Lambda表达式的写法，而只有Java1.8之后的版本才支持这个写法。")]),a._v(" "),e("p",[e("s",[a._v("不过个人还是不是很喜欢Lambda表达式的，可能是我技术比较菜，看到用Lambda表达式写得语句就看不懂=。=")])])])}),[],!1,null,null,null);t.default=n.exports}}]);