(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{492:function(s,e,t){s.exports=t.p+"assets/img/1.95046eec.jpg"},493:function(s,e,t){s.exports=t.p+"assets/img/2.b5935043.jpg"},555:function(s,e,t){"use strict";t.r(e);var a=t(4),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("前几天有人爆出 "),a("a",{attrs:{href:"https://weibo.com/2352539175/I0IcYxfFw",title:"某些公司通过Chrome插件对用户信息进行采集",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("某些公司通过Chrome插件对用户信息进行采集")]),a("OutboundLink")],1),s._v("，正在使用360极速浏览器的我脸色逐渐变得难看了起来（物理上的）。思考许久后决定去试吃比Chrome还干净，比EDGE更智能的Chromium。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("因为本身Chromium是开源项目，所以网上一般找到的都是源代码，不过经过我的搜索之后，我发现了"),a("a",{attrs:{href:"https://chromium.woolyss.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://chromium.woolyss.com"),a("OutboundLink")],1),s._v("这个网站。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(492),alt:""}})]),s._v(" "),a("p",[s._v("原谅色的就是Stable版本，建议下载。\n下载了安装包后，安装过程就和Chrome无异，静默安装，安装好了自动就会打开Chromium。")]),s._v(" "),a("h2",{attrs:{id:"可能出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能出现的问题"}},[s._v("#")]),s._v(" 可能出现的问题")]),s._v(" "),a("h3",{attrs:{id:"_1-提示缺少api秘钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-提示缺少api秘钥"}},[s._v("#")]),s._v(" 1. 提示缺少API秘钥：")]),s._v(" "),a("p",[s._v("因为Chromium是开源项目，所以没有内置Google服务的API，那么这样就可以分为两种情况了。")]),s._v(" "),a("h4",{attrs:{id:"_1-如果你不需要google服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如果你不需要google服务"}},[s._v("#")]),s._v(" 1. 如果你不需要Google服务")]),s._v(" "),a("p",[s._v("打开CMD输入以下指令即可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('setx GOOGLE_API_KEY "false"\nsetx GOOGLE_DEFAULT_CLIENT_ID "false"\nsetx GOOGLE_DEFAULT_CLIENT_SECRET "false"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_2-如果你需要google服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如果你需要google服务"}},[s._v("#")]),s._v(" 2. 如果你需要Google服务")]),s._v(" "),a("p",[s._v("可以使用我提供的API_KEY，打开CMD输入以下指令即可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("setx GOOGLE_API_KEY AIzaSyDPC0ezsNg3TBGQgRyR2IkqNHjjxbkRQ3g\nsetx GOOGLE_DEFAULT_CLIENT_ID 1098701266655-qd7q3jr0c6u7vd1soq1dtgbi05lr525p.apps.googleusercontent.com\nsetx GOOGLE_DEFAULT_CLIENT_SECRET 3gvxP2FwfDBJ9wH2T1RerFcE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("当然你要是信不过我觉得我会盗取你们的信息，那你也可以自己申请API_KEY：")]),s._v(" "),a("ul",[a("li",[s._v("点此"),a("a",{attrs:{href:"https://cloud.google.com/console",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("创建或选择已有项目 →→ 左侧边栏 API和服务 →→ 凭证")]),s._v(" "),a("li",[s._v("创建凭证(类型为 “API 密钥”,名称随意, 不使用密钥限制,记住生成的key)")]),s._v(" "),a("li",[s._v("再创建一个凭证(类型为 “OAuth 客户端 ID”, 名称随意, 应用类型选择 “其他”, 记住生成的 “客户端 ID” 和 “客户端密钥”)")]),s._v(" "),a("li",[s._v("格式填写自己的 API Key")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("setx GOOGLE_API_KEY 生成的API密钥\nsetx GOOGLE_DEFAULT_CLIENT_ID 生成的客户端ID\nsetx GOOGLE_DEFAULT_CLIENT_SECRET 生成的客户端密钥\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-使用flash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用flash"}},[s._v("#")]),s._v(" 2. 使用Flash")]),s._v(" "),a("p",[s._v("Chromium默认是没有Flash插件的，虽然绝大多数时间都用不到Flash了，不过如果你确实有需求，可以这样弄。")]),s._v(" "),a("ul",[a("li",[s._v("首先打开 https://get.adobe.com/cn/flashplayer/otherversions/")]),s._v(" "),a("li",[s._v("然后选择你的系统版本")]),s._v(" "),a("li",[s._v("然后选择"),a("strong",[s._v("Opera and Chromium - PPAPI")]),s._v("的类型后，下载安装(记得取消右边的迈克菲杀毒)")]),s._v(" "),a("li",[s._v("重启Chromium")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(493),alt:""}})]),s._v(" "),a("p",[s._v("这样就可以使用Flash了。")])])}),[],!1,null,null,null);e.default=r.exports}}]);