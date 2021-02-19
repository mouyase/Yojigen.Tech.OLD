const configureWebpack = require('./configs/configureWebpack')
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')
const friendLink = require('./configs/friendLink')

module.exports = {
    port: 62000,
    configureWebpack,
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
        nav,
        sidebar,
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
        friendLink,
        valineConfig: {
            appId: 'IDj1oJAL4ncR6jrRQKz9LmOo-gzGzoHsz',
            appKey: '4wEsRbR1WtSisee2kjkjugUE',
        },
        logo: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/logo.jpg',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新',
        author: '某亚瑟',
        authorAvatar: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/images/avatar.jpg',
        record: '四次元科技',
        subSidebar: 'auto',
        noFoundPageByTencent: false,
        startYear: '2015'
    },
    markdown: {
        'lineNumbers': true
    }
}