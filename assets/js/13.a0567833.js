(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{512:function(s,a,t){s.exports=t.p+"assets/img/cover_s.7d733c4e.jpg"},513:function(s,a,t){s.exports=t.p+"assets/img/1.afba960e.jpg"},514:function(s,a,t){s.exports=t.p+"assets/img/2.251aa393.jpg"},565:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:t(512),alt:""}})]),s._v(" "),n("p",[s._v("Cover: "),n("a",{attrs:{href:"https://www.pixiv.net/artworks/79500654",target:"_blank",rel:"noopener noreferrer"}},[s._v("華如桃李 - 豆の素@Pixiv"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("家里这边DNS劫持是在是有点严重，非常影响开发速度，所以我就使用"),n("code",[s._v("dnsmasq")]),s._v("和"),n("code",[s._v("dnscrypt-proxy")]),s._v("搭建了一个防污染防劫持的本地DNS。")]),s._v(" "),n("h2",{attrs:{id:"效果演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果演示"}},[s._v("#")]),s._v(" 效果演示")]),s._v(" "),n("p",[n("img",{attrs:{src:t(513),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"搭建过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建过程"}},[s._v("#")]),s._v(" 搭建过程")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("如果网络有问题，建议先执行以下指令追加hosts")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sync && echo \"199.232.4.133 raw.githubusercontent.com\">>/etc/hosts'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sync && echo \"199.232.4.133 raw.github.com\">>/etc/hosts'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("p",[s._v("首先要安装Homebrew，这个绝大多数用macOS的人应该都安装了吧，官网"),n("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://brew.sh/"),n("OutboundLink")],1),s._v("，安装指令如下。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("/usr/bin/ruby -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后就是安装"),n("code",[s._v("dnsmasq")]),s._v("和"),n("code",[s._v("dnscrypt-proxy")]),s._v("两大组件了。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("brew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dnsmasq\nbrew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dnscrypt-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("装好之后，编辑配置文件，首先是"),n("code",[s._v("dnsmasq")]),s._v("的配置，文件路径"),n("code",[s._v("/usr/local/etc/dnsmasq.conf")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#忽略本机DNS解析结果")]),s._v("\nno-resolv\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#增加配置文件夹")]),s._v("\nconf-dir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/etc/dnsmasq.d\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置上游服务器为dnscrypt-proxy")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5300")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("然后是"),n("code",[s._v("dnscrypt-proxy")]),s._v("的配置，文件路径"),n("code",[s._v("/usr/local/etc/dnscrypt-proxy.toml")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本地监听5300端口")]),s._v("\nlisten_addresses "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1:5300'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#防劫持DNS使用NestDNS")]),s._v("\nserver_names "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nextdns'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置容错DNS为114DNS")]),s._v("\nfallback_resolvers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'114.114.114.114:53'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("配置好了之后，重启两个组件的服务。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brew services restart dnsmasq\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brew services restart dnscrypt-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("之后再把网络设置里的DNS地址修改为"),n("code",[s._v("127.0.0.1")]),s._v("，应用之后就可以享受无污染的DNS了。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(514),alt:""}})]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("执行过上面修改hosts的指令的话建议执行这个清除hosts")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/199.232.4.133 raw.githubusercontent.com//g"')]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/199.232.4.133 raw.github.com//g"')]),s._v(" /etc/hosts\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("h2",{attrs:{id:"国内白名单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#国内白名单"}},[s._v("#")]),s._v(" 国内白名单")]),s._v(" "),n("p",[s._v("虽然DNS没有了污染，但是国内网站DNS全都变慢了，这个肯定不能接受，所以我们接入"),n("a",{attrs:{href:"https://github.com/felixonmars/dnsmasq-china-list",target:"_blank",rel:"noopener noreferrer"}},[s._v("dnsmasq-china-list"),n("OutboundLink")],1),s._v("项目，来优化本地的DNS。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/etc/dnsmasq.d\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORKDIR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mktemp -d"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/felixonmars/dnsmasq-china-list/master/accelerated-domains.china.conf -o "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/accelerated-domains.china.conf"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/felixonmars/dnsmasq-china-list/master/bogus-nxdomain.china.conf -o "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/bogus-nxdomain.china.conf"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/felixonmars/dnsmasq-china-list/master/google.china.conf -o "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/google.china.conf"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/felixonmars/dnsmasq-china-list/master/apple.china.conf -o "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/apple.china.conf"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/accelerated-domains.china.conf"')]),s._v(" /usr/local/etc/dnsmasq.d/accelerated-domains.china.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/bogus-nxdomain.china.conf"')]),s._v(" /usr/local/etc/dnsmasq.d/bogus-nxdomain.china.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/google.china.conf"')]),s._v(" /usr/local/etc/dnsmasq.d/google.china.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('/apple.china.conf"')]),s._v(" /usr/local/etc/dnsmasq.d/apple.china.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v('"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("OK大功告成。")]),s._v(" "),n("h2",{attrs:{id:"一键安装脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一键安装脚本"}},[s._v("#")]),s._v(" 一键安装脚本")]),s._v(" "),n("p",[s._v("项目地址："),n("a",{attrs:{href:"https://github.com/mouyase/mac_dnscrypt_installer",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/mouyase/mac_dnscrypt_installer"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("脚本使用：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/mouyase/mac_dnscrypt_installer\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mac_dnscrypt_installer\n./install.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);