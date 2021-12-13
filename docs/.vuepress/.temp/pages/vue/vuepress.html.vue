<template><h2 id="vuepress从零开始" tabindex="-1"><a class="header-anchor" href="#vuepress从零开始" aria-hidden="true">#</a> VuePress从零开始</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>VuePress官网：
https://vuepress.vuejs.org/zh/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="vuepress-由两部分组成-一个以-vue-驱动的主题系统的简约静态网站生成工具-和一个为编写技术文档而优化的默认主题。它是为了支持-vue-子项目的文档需求而创建的。" tabindex="-1"><a class="header-anchor" href="#vuepress-由两部分组成-一个以-vue-驱动的主题系统的简约静态网站生成工具-和一个为编写技术文档而优化的默认主题。它是为了支持-vue-子项目的文档需求而创建的。" aria-hidden="true">#</a> VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。</h4>
<h4 id="由-vuepress-生成的每个页面-都具有相应的预渲染静态-html-它们能提供出色的加载性能-并且对-seo-友好。然而-页面加载之后-vue-就会将这些静态内容-接管为完整的单页面应用程序-spa-。当用户在浏览站点时-可以按需加载其他页面。" tabindex="-1"><a class="header-anchor" href="#由-vuepress-生成的每个页面-都具有相应的预渲染静态-html-它们能提供出色的加载性能-并且对-seo-友好。然而-页面加载之后-vue-就会将这些静态内容-接管为完整的单页面应用程序-spa-。当用户在浏览站点时-可以按需加载其他页面。" aria-hidden="true">#</a> 由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。</h4>
<h4 id="请确保你的-node-js-版本-8-6。" tabindex="-1"><a class="header-anchor" href="#请确保你的-node-js-版本-8-6。" aria-hidden="true">#</a> 请确保你的 Node.js 版本 &gt;= 8.6。</h4>
<h4 id="全局安装" tabindex="-1"><a class="header-anchor" href="#全局安装" aria-hidden="true">#</a> 全局安装</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn global add vuepress # 或者：npm install -g vuepress
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!-- ![Image text](https://raw.githubusercontent.com/hongmaju/light7Local/master/img/productShow/20170518152848.png) -->
<h4 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件" aria-hidden="true">#</a> 创建文件</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir press
cd press
初始化项目
yarn init -y # 或者 npm init -y
mkdir docs
mkdir .vuepress
cd .vuepress 创建config.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="结构目录如下" tabindex="-1"><a class="header-anchor" href="#结构目录如下" aria-hidden="true">#</a> 结构目录如下：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>press
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.js
└── package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="修改配置文件-config-js" tabindex="-1"><a class="header-anchor" href="#修改配置文件-config-js" aria-hidden="true">#</a> 修改配置文件 - config.js</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
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
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://www.baidu.com'
            },
        ],
        sidebarDepth: 2,
        sidebar: [{
            title: 'Guide',
            collapsable: false,
            children: ['/guide/']
        }]
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h4 id="默认主题" tabindex="-1"><a class="header-anchor" href="#默认主题" aria-hidden="true">#</a> 默认主题</h4>
<h4 id="默认的主题提供了一个首页-homepage-的布局-用于-这个网站的主页-。想要使用它-需要在你的根级-readme-md-的-yaml-front-matter-指定-home-true。以下是一个如何使用的例子" tabindex="-1"><a class="header-anchor" href="#默认的主题提供了一个首页-homepage-的布局-用于-这个网站的主页-。想要使用它-需要在你的根级-readme-md-的-yaml-front-matter-指定-home-true。以下是一个如何使用的例子" aria-hidden="true">#</a> 默认的主题提供了一个首页（Homepage）的布局 (用于 这个网站的主页)。想要使用它，需要在你的根级 README.md 的 YAML front matter 指定 home: true。以下是一个如何使用的例子：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---
home: true
heroImage: /favicon.ico
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present xxxxxx
---
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="多个侧边栏" tabindex="-1"><a class="header-anchor" href="#多个侧边栏" aria-hidden="true">#</a> 多个侧边栏</h4>
<h4 id="如果你想为不同的页面组来显示不同的侧边栏-首先-将你的页面文件组织成下述的目录结构" tabindex="-1"><a class="header-anchor" href="#如果你想为不同的页面组来显示不同的侧边栏-首先-将你的页面文件组织成下述的目录结构" aria-hidden="true">#</a> 如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd docs
vuepress dev .
构建静态文件
vuepress build .
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="部署上线" tabindex="-1"><a class="header-anchor" href="#部署上线" aria-hidden="true">#</a> 部署上线</h4>
<h4 id="vuepress-文档部署到-github-pages-github-actions" tabindex="-1"><a class="header-anchor" href="#vuepress-文档部署到-github-pages-github-actions" aria-hidden="true">#</a> vuepress 文档部署到 github-pages Github Actions</h4>
<h4 id="创建一个deploy-sh" tabindex="-1"><a class="header-anchor" href="#创建一个deploy-sh" aria-hidden="true">#</a> 创建一个deploy.sh</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#cd D:/vue/press/docs/
# 生成静态文件
#vuepress build .
npm run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://&lt;USERNAME>.github.io
# git push -f git@github.com:&lt;USERNAME>/&lt;USERNAME>.github.io.git master
git push -f git@github.com:taiyangyexue/yuwenting.github.io.git main:gh-pages

# 如果发布到 https://&lt;USERNAME>.github.io/&lt;REPO>
# git push -f git@github.com:&lt;USERNAME>/&lt;REPO>.git master:gh-pages

cd -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="设置package-json" tabindex="-1"><a class="header-anchor" href="#设置package-json" aria-hidden="true">#</a> 设置package.json</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
    "scripts": {
        "deploy": "bash deploy.sh"
      },
}
运行npm run deploy 即可自动构建部署到github上。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="在-github-workflow-下新建-deploy-yml" tabindex="-1"><a class="header-anchor" href="#在-github-workflow-下新建-deploy-yml" aria-hidden="true">#</a> 在.github/workflow/下新建 deploy.yml</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
     - name: Checkout
       uses: actions/checkout@v2
       with: 
         persist-credentials: false
     - name: Install &amp; Build # 指令
       run: |
          npm install
          npm run docs:build 

     - name: Build and Deploy Repo
       uses: JamesIves/github-pages-deploy-action@releases/v4
       with: 
         ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # Settings > Secret 建立的 ACCESS_TOKEN，推同个 repo 可以不需要
         BRANCH: gh-pages
         FOLDER: docs/.vuepress/dist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h4 id="上面有个需要注意的点-就是-deploy下-需要填写一个秘钥-需要在-github-上申请一个-access-token" tabindex="-1"><a class="header-anchor" href="#上面有个需要注意的点-就是-deploy下-需要填写一个秘钥-需要在-github-上申请一个-access-token" aria-hidden="true">#</a> 上面有个需要注意的点，就是 Deploy下，需要填写一个秘钥，需要在 github 上申请一个 ACCESS_TOKEN</h4>
<h4 id="如果上面都配置好了-可以执行-push-操作了。正常情况下是能够执行成功的。" tabindex="-1"><a class="header-anchor" href="#如果上面都配置好了-可以执行-push-操作了。正常情况下是能够执行成功的。" aria-hidden="true">#</a> 如果上面都配置好了，可以执行 push 操作了。正常情况下是能够执行成功的。</h4>
<h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h4>
<h4 id="_1-yml格式问题" tabindex="-1"><a class="header-anchor" href="#_1-yml格式问题" aria-hidden="true">#</a> 1..yml格式问题</h4>
<h4 id="_2-vuepress下面config-js配置路径问题-把-base改下" tabindex="-1"><a class="header-anchor" href="#_2-vuepress下面config-js配置路径问题-把-base改下" aria-hidden="true">#</a> 2..vuepress下面config.js配置路径问题 把 base改下</h4>
</template>
