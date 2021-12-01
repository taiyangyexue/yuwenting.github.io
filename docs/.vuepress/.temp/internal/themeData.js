export const themeData = {
  "search": false,
  "nav": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Guide",
      "link": "/guide/"
    },
    {
      "text": "External",
      "link": "https://www.baidu.com"
    }
  ],
  "sidebarDepth": 1,
  "sidebar": [
    [
      "/role/role.md",
      "首页"
    ],
    {
      "title": "新框架",
      "collapsable": true,
      "children": [
        [
          "/new/test.md",
          "发布新框架"
        ],
        [
          "/new/testcopy.md",
          "本地开发"
        ]
      ]
    },
    [
      "/feedback/feedback.md",
      "问题反馈"
    ]
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
