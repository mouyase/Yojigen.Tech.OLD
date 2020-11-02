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
                        public: path.resolve(__dirname, './public')
                    }
                }
            }
        } else {
            return {
                resolve: {
                    alias: {
                        public: path.resolve(__dirname, './public')
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
    title: '四次元科技',
    description: '有关二次元、三次元、科技、生活以及一切',
    dest: 'public',
    head: [
        [
            'link', {
                'rel': 'icon',
                'href': '/favicon.ico'
            }
        ],
        [
            'meta', {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ]
    ],
    theme: 'reco',
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/',
            icon: 'reco-home'
        }, {
            text: '时间线',
            link: '/page/timeline/',
            icon: 'reco-date'
        },
        // {
        //     text: '文档',
        //     icon: 'reco-message',
        //     'items': [
        //         {
        //             text: 'vuepress-reco',
        //             link: '/docs/theme-reco/'
        //         }
        //     ]
        // },
        {
            text: '项目',
            icon: 'reco-message',
            items: [{
                text: 'pixivM',
                link: '/project/pixivM/',
                icon: 'reco-github'
            },
            {
                text: 'PivisionM',
                link: '/project/pivisionM/',
                icon: 'reco-github'
            }]
        }, {
            text: '联系方式',
            icon: 'reco-message',
            items: [{
                text: 'GitHub',
                link: 'https://github.com/mouyase',
                icon: 'reco-github'
            }]
        }
        ],
        sidebar: {
            '/docs/theme-reco/': [
                '',
                'theme',
                'plugin',
                'api'
            ]
        },
        type: 'blog',
        blogConfig: {
            category: {
                location: 2,
                text: '分类'
            },
            tag: {
                location: 3,
                text: '标签'
            }
        },
        friendLink: [{
            title: '超能小紫',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/www.mokeyjay.com.jpg',
            link: 'https://www.mokeyjay.com'
        },
        {
            title: 'Kevan\'s Blog',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/www.qqstop.cn.jpg',
            link: 'https://www.qqstop.cn'
        },
        {
            title: 'ACG喵',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/acgmiao.com.jpg',
            link: 'https://acgmiao.com'
        },
        {
            title: 'TypeBlog',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/typeblog.net.jpg',
            link: 'https://typeblog.net'
        },
        {
            title: '初之音',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/www.himiku.com.jpg',
            link: 'https://www.himiku.com'
        },
        {
            title: '烧饼的博客',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/feng.moe.jpg',
            link: 'https://feng.moe'
        },
        {
            title: 'GamerNoTitle',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/bili33.top.jpg',
            link: 'https://bili33.top'
        },
        {
            title: '0xFE',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/0xfe.com.cn.jpg',
            link: 'https://0xfe.com.cn'
        },
        {
            title: '惶心博客',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/links/www.justhx.com.jpg',
            link: 'https://www.justhx.com'
        },
        ],
        valineConfig: {
            appId: 'IDj1oJAL4ncR6jrRQKz9LmOo-gzGzoHsz',
            appKey: '4wEsRbR1WtSisee2kjkjugUE',
        },
        logo: '/images/logo.jpg',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新',
        author: '某亚瑟',
        authorAvatar: '/images/avatar.jpg',
        record: '四次元科技',
        subSidebar: 'auto',
        noFoundPageByTencent: false,
        startYear: '2015'
    },
    markdown: {
        'lineNumbers': true
    }
}