module.exports = {
    base:'/yuwenting.github.io/',
    title: 'yuwenting',
    description: 'You think you can, you can',
    dest: './docs/.vuepress/dist',
    evergreen: true,
    themeConfig: {
        search: false,
        navbar: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Subdirectory',
                link: '/subdirectory/subdirectory.md',
            },
        ],
        sidebar: [
            {
                text: "notepad",
                link:"/",
                children:[
                    {
                        text: "vue",
                        link:"/vue/home.md",
                        children:[
                            {
                                text: "vuepress",
                                link:"/vue/vuepress.md",
                            },
                        ]
                    },
                    {
                        text: "node",
                        link:"/node/home.md",
                    },
                    {
                        text: "html",
                        link:"/html/home.md",
                    },
                    {
                        text: "css",
                        link:"/css/home.md",
                        children:[
                            {
                                text: "blackAndWhite",
                                link:"/css/blackWhite.md",
                            },
                        ]
                    },
                    {
                        text: "js",
                        link:"/js/home.md",
                    }
                ]
            },
        ],
    }
}