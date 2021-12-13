export const data = {
  "key": "v-cb4f7eba",
  "path": "/subdirectory/subdirectory.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "subdirectory/subdirectory.md",
  "git": {
    "updatedTime": 1639384606000,
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
