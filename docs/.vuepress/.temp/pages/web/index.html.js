export const data = {
  "key": "v-744e6dd4",
  "path": "/web/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "这是web",
      "slug": "这是web",
      "children": []
    }
  ],
  "filePathRelative": "web/index.md",
  "git": {
    "updatedTime": 1638343298000,
    "contributors": [
      {
        "name": "yuwenting",
        "email": "yuwenting@fehorizon.com",
        "commits": 1
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
