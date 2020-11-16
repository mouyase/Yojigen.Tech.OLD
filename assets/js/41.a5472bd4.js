(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{565:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"环境相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境相关"}},[a._v("#")]),a._v(" 环境相关")]),a._v(" "),t("h3",{attrs:{id:"升级pip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级pip"}},[a._v("#")]),a._v(" 升级pip")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("python -m pip install -U --force-reinstall pip\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建虚拟环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟环境"}},[a._v("#")]),a._v(" 创建虚拟环境")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("virtualenv --no-site-packages venv #创建默认Python版本的虚拟环境\n\nvirtualenv -p /usr/local/bin/python3 --no-site-packages venv #创建自定义Python版本的虚拟环境\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"使用虚拟环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用虚拟环境"}},[a._v("#")]),a._v(" 使用虚拟环境")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("source venv/bin/activate\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"退出虚拟环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#退出虚拟环境"}},[a._v("#")]),a._v(" 退出虚拟环境")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("deactivate\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"编译python"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译python"}},[a._v("#")]),a._v(" 编译python")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rm -rf /usr/local/python3\n./configure --prefix=/usr/local/python3/\nmake && make install\nrm -rf /usr/local/bin/python3\nln -s /usr/local/python3/bin/python3 /usr/local/bin/python3\nrm -rf /usr/local/bin/pip3\nln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"pip导出包列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pip导出包列表"}},[a._v("#")]),a._v(" pip导出包列表")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip freeze > requirements.txt\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"pip恢复包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pip恢复包"}},[a._v("#")]),a._v(" pip恢复包")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip install -r requirements.txt\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装证书-macos上python根的证书不被信任"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装证书-macos上python根的证书不被信任"}},[a._v("#")]),a._v(" 安装证书(macOS上Python根的证书不被信任)")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[a._v("这是macOS特有问题")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /Applications/Python\\ 3.8\nsudo ./Install\\ Certificates.Command\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);