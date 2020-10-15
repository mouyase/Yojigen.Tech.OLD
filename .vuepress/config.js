const path = require('path')

module.exports = {
    port: 62000,
    configureWebpack: () => {
        const NODE_ENV = process.env.NODE_ENV
        if (NODE_ENV === 'production') {
            return {
                output: {
                    publicPath: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/'
                },
                resolve: {
                    alias: {
                        'public': path.resolve(__dirname, './public')
                    }
                }
            }
        } else {
            return {
                resolve: {
                    alias: {
                        'public': path.resolve(__dirname, './public')
                    }
                }
            }
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    title: "四次元科技",
    description: "有关二次元、三次元、科技、生活以及一切",
    dest: "public",
    head: [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    theme: "reco",
    themeConfig: {
        noFoundPageByTencent: false,
        nav: [{
                text: "首页",
                link: "/",
                icon: "reco-home"
            },
            {
                text: "时间线",
                link: "/timeline/",
                icon: "reco-date"
            },
            // {
            //     text: "文档",
            //     icon: "reco-message",
            //     "items": [
            //         {
            //             text: "vuepress-reco",
            //             link: "/docs/theme-reco/"
            //         }
            //     ]
            // },
            {
                text: "联系方式",
                icon: "reco-message",
                items: [{
                    text: "GitHub",
                    link: "https://github.com/mouyase",
                    icon: "reco-github"
                }]
            }
        ],
        sidebar: {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ]
        },
        type: "blog",
        blogConfig: {
            category: {
                location: 2,
                text: "分类"
            },
            tag: {
                location: 3,
                text: "标签"
            }
        },
        friendLink: [{
                title: "超能小紫",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://www.mokeyjay.com"
            },
            {
                title: "Kevan's Blog",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://www.qqstop.cn"
            },
            {
                title: "ACG喵",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://acgmiao.com"
            },
            {
                title: "TypeBlog",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://typeblog.net"
            },
            {
                title: "初之音",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://www.himiku.com"
            },
            {
                title: "烧饼的博客",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://feng.moe"
            },
            {
                title: "GamerNoTitle",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://bili33.top"
            },
            {
                title: "0xFE",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://0xfe.com.cn"
            },
            {
                title: "惶心博客",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "[https://www.justhx.com"
            },
        ],
        logo: "/images/logo.jpg",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "最后更新",
        author: "某亚瑟",
        authorAvatar: "/images/avatar.jpg",
        record: "四次元科技",
        startYear: "2015"
    },
    markdown: {
        "lineNumbers": true
    }
}