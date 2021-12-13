export const themeData = {
  "search": false,
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Subdirectory",
      "link": "/subdirectory/subdirectory.md"
    }
  ],
  "sidebar": [
    {
      "text": "notepad",
      "link": "/",
      "children": [
        {
          "text": "vue",
          "link": "/vue/home.md",
          "children": [
            {
              "text": "vuepress",
              "link": "/vue/vuepress.md"
            }
          ]
        },
        {
          "text": "node",
          "link": "/node/home.md"
        },
        {
          "text": "html",
          "link": "/html/home.md"
        },
        {
          "text": "css",
          "link": "/css/home.md",
          "children": [
            {
              "text": "blackAndWhite",
              "link": "/css/blackWhite.md"
            }
          ]
        },
        {
          "text": "js",
          "link": "/js/home.md"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
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
