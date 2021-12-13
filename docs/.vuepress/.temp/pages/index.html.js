export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": false,
    "heroText": "于文婷"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1639384606000,
    "contributors": [
      {
        "name": "yuwenting",
        "email": "yuwenting@fehorizon.com",
        "commits": 3
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
