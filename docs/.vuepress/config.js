module.exports = {
    base:'/yuwenting.github.io/',
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        search: false,
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/',
                // items: [{
                //     text: 'Web',
                //     link: '/web/'
                // },
                // {
                //     text: 'News',
                //     link: '/news/'
                // }]
            },
            {
                text: 'External',
                link: 'https://www.baidu.com'
            },
        ],
        sidebarDepth: 1,
        sidebar: [
            
            ['/role/role.md', '首页'],
            {
                title: "新框架",
                collapsable: true,
                children:[
                    ['/new/test.md', '发布新框架'],
                    ['/new/testcopy.md', '本地开发'],
                ]
            },
            ['/feedback/feedback.md', '问题反馈']
        ],
    }
}